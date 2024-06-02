import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserProvider } from '@/LoginStatus/UserProvider';

//样式初始化
import "reset-css"
//UI框架样式

//全局样式
import "./assets/styles/global.scss"
//组件样式
import App from './App.tsx'
//import Router from "./router"
import { BrowserRouter } from 'react-router-dom'
//状态管理 数据库

import { Provider } from 'react-redux'
import store from '@/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
 <Provider store={store}>
   <UserProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </UserProvider>
    
    
 </Provider>
)
