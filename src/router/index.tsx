//配置为数组的形式
import React,{ lazy } from "react";
import Home from    "../views/Home"
// import About from    "../views/About"
// import User from    "../views/User"
import Login from    "../views/Login/form"
import Page404 from    "../views/404/404"

//路由懒加载
// const About = lazy(()=>import("../views/About"))
// const User = lazy(()=>import("../views/User"))
const Page1 = lazy(()=>import("../views/Page1/Page1"))
const Page2 = lazy(()=>import("../views/Page2/Page2"))
const Page301=lazy(()=>import("../views/Page301/Page301"))
const Page302=lazy(()=>import("../views/Page302/Page302"))


//重定向组件
import { Navigate } from "react-router-dom";

//懒加载包裹函数
const withLoadingComponent = (comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const adminRoutes=[
    
    
    {
        path:"/",
        element:<Navigate to="/login"/>
    },
    //嵌套路由开始------------------------
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
            },
            {
                path:"/page3/page301",
                element:withLoadingComponent(<Page301/>)
            },
            {
                path:"/page3/page302",
                element:withLoadingComponent(<Page302/>)
            }
        ]
    },
    //嵌套路由结束--------------------------
    {
        path:"/login",
        element:<Login/>
    },
    
    {
        //如果用户访问的是不存在的页面 直接跳到首页
        path:"*",
        element:<Page404/>
    },
    
]

const userRoutes=[
    {
        path:"/",
        element:<Navigate to="/login"/>
    },
    //嵌套路由开始------------------------
    {
        path:"/",
        element:<Home/>,
        children:[
            {
                path:"/page1",
                element:withLoadingComponent(<Page1/>)
            },
            {
                path:"/page3/page301",
                element:withLoadingComponent(<Page301/>)
            },
            {
                path:"/page3/page302",
                element:withLoadingComponent(<Page302/>)
            }
        ]
    },
    //嵌套路由结束--------------------------
    {
        path:"/login",
        element:<Login/>
    },
    
    {
        //如果用户访问的是不存在的页面 直接跳到首页
        path:"*",
        element:<Page404/>
    },
]

const routes = localStorage.getItem('role') === 'admin'?adminRoutes:userRoutes

export default routes;