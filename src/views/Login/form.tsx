
import type { FormProps } from 'antd';
import { Button, Form, Input,message } from 'antd';
import "./form.less"
import React, { useEffect } from 'react';
import { useNavigate, } from "react-router-dom";
import users from "@/message"
// import { useUser } from '@/LoginStatus/UserProvider';


//逻辑是 提交表单后查看账号与密码是否正确，如果正确就跳转到‘/page1’，先检查是否已登录，如果没登陆，就再保存用户的信息到localStorage

type FieldType = {
  username?: string;
  password?: string;
  role?:string;
};

const App: React.FC = () => {

 
  const navigateTo = useNavigate()
  const [form] = Form.useForm();

//保存登录信息
function saveLoginState(values: FieldType) {
  localStorage.setItem('username', values.username as string);
  localStorage.setItem('password', values.password as string);
  localStorage.setItem('role', values.role as string);
  // 设置过期时间为1小时
  localStorage.setItem('expires', String(new Date().getTime() + 1000 * 60 * 60));
}

//确认登陆状态
function checkLoginState() {
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');
  const role = localStorage.getItem('role');
  const expires = localStorage.getItem('expires');
  if (username && password && role && new Date().getTime() < parseInt(expires as string)) {
    return { username, password,role }; // 用户已登录
  } else {
    // 清除登录状态
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role');
    localStorage.removeItem('expires');
    return null;
  }
}

function isUserLoggedIn() {
  return checkLoginState() !== null;
}

// type UserContextType = {
//   user: FieldType | null; // 用户对象或null
//   login: (username: string, password: string) => void;
//   logout: () => void;
// };

//const {login} = useUser() as UserContextType;//获取上下文的login操作

//处理点击登陆后的操作
const handleLogin = async (values: FieldType) => {
  const user = users.find((u) => u.username === values.username && u.password === values.password);
  if (user && !isUserLoggedIn()) {
        // 登录成功，保存用户信息
        saveLoginState(user);
        //console.log(localStorage)
        //login(values.username as string, values.password as string); // 确保上下文的 login 方法被调用
        message.success("登录成功！")
        navigateTo("/page1");
      } else if (user) {
        // 用户已登录，不执行操作
        message.info('您已经登录过了！');
        navigateTo("/page1");
      } else {
        // 登录失败
        message.error('用户名或密码错误！');
      }
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
  handleLogin(values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

// const { user } = useUser() as UserContextType;
// console.log(user)
//   console.log(localStorage)

  return (
    <div className='container'>
    <Form
    form={form}
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

   

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" >
        Login
      </Button>
    </Form.Item>
  </Form>
  </div>
  )
};

export default App;
