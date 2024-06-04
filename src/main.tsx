//import React from 'react'
import ReactDOM from 'react-dom/client'

//样式初始化
import "reset-css"

//全局样式
import "./assets/styles/global.scss"
//组件样式
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <BrowserRouter>
   <App />
</BrowserRouter>
)
