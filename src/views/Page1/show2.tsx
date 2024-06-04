import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import user from "@/message/index"

type Item = {
    name: string;
    role:string;
    key:string
    
  };

const columns: TableProps<Item>['columns'] = [
    {
        title: '姓名',
        dataIndex: 'name',
        width: '50%',
        
      },
      {
        title: '角色',
        dataIndex: 'role',
        width: '50%',
        
      },
];

const data: Item[] = [];
for (let i = 0; i < user.length; i++) {
    if(user[i].role === 'User'){
        data.push({
            key: i.toString(),
            name: user[i].username,
            role: user[i].role,
          });
    }
}

const App: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    
  />
);

export default App;