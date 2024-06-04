import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import user from "@/message/index"

type Item = {
    name: string;
    role:string;
    key:string
    power:number
  };

const columns: TableProps<Item>['columns'] = [
    {
        title: '姓名',
        dataIndex: 'name',
        width: '30%',
        
      },
      {
        title: '角色',
        dataIndex: 'role',
        width: '30%',
        
      },
      {
        title: '权限',
        dataIndex: 'power',
        width: '40%',
        
      },
];

const data: Item[] = [];
for (let i = 0; i < user.length; i++) {
    if(user[i].role === 'Admin'){
        data.push({
            key: i.toString(),
            name: user[i].username,
            role: user[i].role,
            power:user[i].power as number
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