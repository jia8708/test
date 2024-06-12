
import { Button, Result } from 'antd';
import "./404.less"
import React from "react";
import { useNavigate } from "react-router-dom";

function checkLoginState() {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  const role = localStorage.getItem('role');
  const expires = localStorage.getItem('expires');
  if (username && password && role && new Date().getTime() < parseInt(expires as string)) {
    return { username, password }; // 用户已登录
  } else {
    // 清除登录状态
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role');
    localStorage.removeItem('expires');
    return null;
  }
}

const App: React.FC = () => {
  const navigateTo = useNavigate()
  
 // 检查用户是否登录
 const userLoggedIn = checkLoginState();

 const BackHome = () => {
   if (userLoggedIn) {
     // 如果用户已登录，重定向到 /page1
     navigateTo("/page1");
   } else {
     // 如果用户未登录，重定向到 /login
     navigateTo("/login");
   }
 };

  return (
    <>
      <Result
    status="404"
    title="404"
    subTitle="抱歉，网页不存在"
    extra={<Button type="primary" onClick={BackHome}>返回</Button>}
  />
    </>
  )
}

export default App;