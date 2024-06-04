import React, { useState } from 'react';
import type { TableProps } from 'antd';
import { Modal,Form, Input,InputNumber, Button, Popconfirm, Table, Typography,message, Flex } from 'antd';
import fruit from "@/message/fruitMsg"

type Item = {
    name: string;
    number: number;
    price:number
    key:string
  };


const originData: Item[] = [];
for (let i = 0; i < fruit.length; i++) {
    
        originData.push({
            key: i.toString(),
            name: fruit[i].name,
            number: fruit[i].number,
            price:fruit[i].price
          })
    }


    interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
        editing: boolean;
        dataIndex: string;
        title: any;
        inputType: 'number' | 'text';
        record: Item;
        index: number;
      }
      
      const EditableCell: React.FC<React.PropsWithChildren<EditableCellProps>> = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
      }) => {
        const inputNode = inputType === 'number'?<InputNumber/>:<Input />;
      
        return (
          <td {...restProps}>
            {editing ? (
              <Form.Item
                name={dataIndex}
                style={{ margin: 0 }}
                rules={[
                  {
                    required: true,
                    message: `请输入 ${title}!`,
                  },
                ]}
              >
                {inputNode}
              </Form.Item>
            ) : (
              children
            )}
          </td>
        );
      };
      const App: React.FC = () => {
          const [form] = Form.useForm();
          const [data, setData] = useState(originData);
          const [editingKey, setEditingKey] = useState('');
          const [isModalVisible, setIsModalVisible] = useState(false); // 控制模态框显示的状态
          const [searchValue, setSearchValue] = useState(''); // 搜索框的状态
        
          const isEditing = (record: Item) => record.key === editingKey;
        
          const edit = (record: Partial<Item> & { key: React.Key }) => {
            form.setFieldsValue({ name: '', number: '',price:'', ...record });
            setEditingKey(record.key);
          };
        
          const cancel = () => {
            setEditingKey('');
          };
        
          const save = async (key: React.Key) => {
            try {
              const row = (await form.validateFields()) as Item;
        
              const newData = [...data];
              const index = newData.findIndex((item) => key === item.key);
              if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                  ...item,
                  ...row,
                });
                setData(newData);
                setEditingKey('');
                message.success("保存成功")
              } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
                message.success("保存成功")
              }
            } catch (errInfo) {
              console.log('Validate Failed:', errInfo);
            }
          };
        
          const deleteItem = (key: string) => {
            const newData = data.filter(item => item.key !== key);
            setData(newData);
            setEditingKey('');
            message.success("删除成功")
          };
        
      // 处理模态框显示的函数
      const showModal = () => {
        form.resetFields(); // 重置表单
          setIsModalVisible(true);
        };
      
        // 处理模态框隐藏的函数
        const handleOk = () => {
          form.submit();
        };
      
        const handleCancel = () => {
          setIsModalVisible(false);
        };
      
        // 处理添加新用户的表单提交
        const addNewUser = async () => {
          try {
            const values = await form.validateFields();
            const newRecord = {
              key: new Date().getTime().toString(), // 或者使用其他方法生成唯一 key
              name: values.name,
              number:values.number,
              price:values.price,
             
            };
            setData(prevData => [...prevData, newRecord]);
            message.success("添加成功");
            setIsModalVisible(false); // 关闭模态框
          } catch (errorInfo) {
            console.log('Validate Failed:', errorInfo);
          }
        };
      
         // 根据搜索值过滤数据
       const filteredData = searchValue ? data.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())) : data;
      
      
          const columns = [
            {
              title: '种类',
              dataIndex: 'name',
              width: '20%',
              editable: true,
            },
            {
              title: '数量',
              dataIndex: 'number',
              width: '20%',
              editable: true,
            },
            {
              title: '单价/斤',
              dataIndex: 'price',
              width: '20%',
              editable: true,
            },
            {
              title: '操作',
              dataIndex: 'operation',
              render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                  <span>
                    <Typography.Link onClick={() => save(record.key as React.Key)} style={{ marginRight: 8 }}>
                      保存
                    </Typography.Link>
                    <Popconfirm title="确认取消?" onConfirm={cancel} okText="是" cancelText="否">
                      <a>取消</a>
                    </Popconfirm>
                    <Popconfirm title="确认删除?" onConfirm={() => deleteItem(record.key as string)} okText="是" cancelText="否">
                     <a style={{color: 'red' , marginLeft: 8}}>删除</a> {/* 你可以根据需要调整样式 */}
                    </Popconfirm>
                  </span>
                ) : (
                  <span>
                      <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record as Partial<Item> & { key: React.Key })}>
                    编辑
                  </Typography.Link>
                  </span>
              )},
            },
          ];
        
          const mergedColumns: TableProps['columns'] = columns.map((col) => {
            if (!col.editable) {
              return col;
            }
            return {
              ...col,
              onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === 'name'?'text':'number',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
              }),
            };
          });
        
          return (
            <Form form={form} component={false} >
              <Flex justify="end" >
              {/* 添加搜索框 */}
              <Form.Item  name="search" initialValue={searchValue} >
                <Input.Search
                  placeholder="输入水果名称搜索"
                  onSearch={value => setSearchValue(value)}
                  style={{width: 200 }}
                />
              </Form.Item>
            </Flex>
              <Table
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                bordered
                dataSource={filteredData}
                columns={mergedColumns}
                pagination={{
                  onChange: cancel,
                }}
                footer={() => (
                <div>
                  <Button type="primary" onClick={showModal}>
                    添加水果
                  </Button>
                  
                </div>
              )}
              />
              <Modal className="modal-center" title="添加新水果" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} okText={'确定'} cancelText={'取消'}>
              <Form form={form} layout="vertical" onFinish={addNewUser}  >
                <Form.Item
                  name="name"
                  label="水果名称"
                  className='custom-label'
                  rules={[{ required: true, message: '请输入水果名称!' }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="number"
                  label="数量"
                  className='custom-label'
                  rules={[{ required: true, message: '请输入数量!' }]}
                >
                  <InputNumber />
                </Form.Item>
                <Form.Item
                  name="price"
                  label="价格"
                  className='custom-label'
                  rules={[{ required: true, message: '请输入价格!' }]}
                >
                  <InputNumber />
                </Form.Item>
              </Form>
            </Modal>
            </Form>
          );
        };
        
        export default App;