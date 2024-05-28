import { useState } from 'react'
// import Comp1 from "@/components/Comp1"
// import Comp2 from "@/components/Comp2"
// import { Button } from "antd";
// import {UpCircleOutlined } from "@ant-design/icons"
import { useRoutes,Outlet,Link } from 'react-router-dom';
import router from "./router"

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router);//利用hook生成的对象
  return (
    <>
      <div className='App'>
        {/* 标签实现跳转 */}
        {/* <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link> */}
      
      {/* 占位符组件，类似于窗口，用于展示组件 */}
      {/* <Outlet></Outlet> */}
      
      {outlet}
    
      </div>
      
    </>
  )
}

export default App
