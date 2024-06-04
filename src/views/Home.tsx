import React, { useState } from 'react';
import {  Layout, theme,Button, Dropdown, Space, ConfigProvider,Switch } from 'antd';
import type { MenuProps } from 'antd';
import { Outlet } from 'react-router-dom';
import MainMenu from "@/Menu"

  const { Header, Content, Footer, Sider } = Layout;

  const View: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);

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

const [themeValue,setThemeValue] = useState('default')

// 切换主题的函数
const toggleTheme = () => {
 setThemeValue(prev => prev === 'default' ? 'dark' : 'default');
};

  return (
    <>
    <ConfigProvider
      theme={{
        algorithm: themeValue === 'default' ? theme.defaultAlgorithm : theme.darkAlgorithm,
      }}
    >
      <div className="App">
        <div className="theme-switcher">
          <Switch checked={themeValue === 'dark'} onChange={toggleTheme} checkedChildren="夜晚" unCheckedChildren="白天"/>
        </div>
        <Layout style={{ minHeight: '100vh' }}>
        {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <MainMenu></MainMenu>
      </Sider>
      {/* 右边的内容 */}
      <Layout>
        {/* 右侧头部 , background: colorBgContainer */}
        <Header style={{ paddingLeft: '16px'}} >
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
        <Content style={{ marginLeft:'16px',marginRight:'16px'}} >
          {/* 窗口 */}
          <Outlet/>
        </Content>
        {/* 右侧底部 */}
        <Footer style={{ textAlign: 'center' ,padding:0,lineHeight:'48px'}}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
      </div>
    </ConfigProvider>
    </>
  );
};

export default View;