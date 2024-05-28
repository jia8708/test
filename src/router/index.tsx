//配置为数组的形式
import React,{ lazy } from "react";
import Home from    "../views/Home"
// import About from    "../views/About"
// import User from    "../views/User"

//路由懒加载
const About = lazy(()=>import("../views/About"))
const User = lazy(()=>import("../views/User"))
const Page1 = lazy(()=>import("../views/Page1"))
const Page2 = lazy(()=>import("../views/Page2"))


//重定向组件
import { Navigate } from "react-router-dom";

//懒加载包裹函数
const withLoadingComponent = (comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes=[
    
    //嵌套路由开始------------------------
    {
        path:"/",
        element:<Navigate to="/page1"/>
    },
    {
        path:"/",
        element:<Home/>,
        children:[
            {
                path:"/page1",
                element:withLoadingComponent(<Page1/>)
            },
            {
                path:"/page2",
                element:withLoadingComponent(<Page2/>)
            }
        ]
    }

    //嵌套路由结束--------------------------

    // {
    //     path:"/home",
    //     element:<Home/>
    // },
    // {
    //     path:"/about",
    //     element:withLoadingComponent(<About/>)
    // },
    // {
    //     path:"/user",
    //     element:withLoadingComponent(<User/>)
    // }
]

export default routes;