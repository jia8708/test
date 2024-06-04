import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import fruit from "@/message/fruitMsg"
import LazyImg from '@/views/Img';
import image1 from '@/views/Img/orange.jpg'
import image2 from '@/views/Img/strawberry.jpg'
import image3 from '@/views/Img/watermelon.jpg'
import image4 from '@/views/Img/tomato.jpg'

const imagData = [
    {src:image1,alt:'橘子'},
    {src:image2,alt:'草莓'},
    {src:image3,alt:'西瓜'},
    {src:image4,alt:'番茄'},
]

type Item = {
    name: string;
    number: number;
    price:number
    key:string
  };


const data: Item[] = [];
for (let i = 0; i < fruit.length; i++) {
    
        data.push({
            key: i.toString(),
            name: fruit[i].name,
            number: fruit[i].number,
            price:fruit[i].price
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
        title: '单价/斤',
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