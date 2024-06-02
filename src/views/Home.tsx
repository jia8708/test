import React, { useEffect, useState } from 'react';
import {  Layout, theme,Button, Dropdown, Space, message } from 'antd';
import type { MenuProps } from 'antd';
import { Outlet } from 'react-router-dom';
import MainMenu from "@/Menu"
// import { useUser } from '@/LoginStatus/UserProvider';

// type FieldType = {
//   username?: string;
//   password?: string;
//   role?:string;
// };

// type UserContextType = {
//   user: FieldType | null; // 用户对象或null
//   login: (username: string, password: string) => void;
//   logout: () => void;
// };


  const { Header, Content, Footer, Sider } = Layout;

  const View: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);

  //const {user,logout} = useUser() as UserContextType;//获取上下文的logout操作
  
function logout(){
  localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('role');
      localStorage.removeItem('expires');
}


const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a href="http://localhost:5173/login" onClick={logout}>
        退出登录
      </a>
    ),
  },
  
];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
        {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <MainMenu></MainMenu>
      </Sider>
      {/* 右边的内容 */}
      <Layout>
        {/* 右侧头部 */}
        <Header style={{ paddingLeft: '16px', background: colorBgContainer }} >
        <div>
              {localStorage && (
                <span>
                  欢迎, {localStorage.getItem('username')} {localStorage.getItem('role')}
                </span>
              )}
            </div>
        <Space direction="vertical">
          <Space wrap>
            <Dropdown menu={{ items }} placement="bottom" arrow>
            <Button className='HomeBtn'>设置</Button>
            </Dropdown>
          </Space>
        </Space>
        </Header>
        {/* 右侧内容 */}
        <Content style={{ margin: '16px 16px 0' ,background:colorBgContainer}} >
          {/* 窗口 */}
          <Outlet/>
          
        </Content>
        {/* 右侧底部 */}
        <Footer style={{ textAlign: 'center' ,padding:0,lineHeight:'48px'}}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default View;