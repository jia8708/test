import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import drink from "@/message/drinkMsg"
import LazyImg from '@/views/Img';
import image1 from "@/views/Img/water1.jpg"
import image2 from "@/views/Img/water2.jpg"
import image3 from "@/views/Img/water3.jpg"

const imagData = [
    {src:image1,alt:'orange'},
    {src:image2,alt:'strawberry'},
    {src:image3,alt:'watermelon'},
]

type Item = {
    name: string;
    number: number;
    price:number
    key:string
  };


const data: Item[] = [];
for (let i = 0; i < drink.length; i++) {
    
        data.push({
            key: i.toString(),
            name: drink[i].name,
            number: drink[i].number,
            price:drink[i].price
          })
    }


const columns: TableProps<Item>['columns'] = [
    {
        title: '种类',
        dataIndex: 'name',
        width: '30%',

      },
      {
        title: '数量',
        dataIndex: 'number',
        width: '30%',
  
      },
      {
        title: '单价',
        dataIndex: 'price',
        width: '40%',
       
      },
];

const App: React.FC = () => (
    <>
    <Table
    columns={columns}
    dataSource={data}
    bordered
  />

    <div>
        {imagData.map((image, index) => (
        <div className='image-container'>
            <div>{image.alt}</div>
            <LazyImg key={index} src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  </>
);

export default App;