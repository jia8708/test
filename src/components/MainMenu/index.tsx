import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Menu } from 'antd';
  import { useNavigate,useLocation } from 'react-router-dom';
  import { useEffect,useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

//登录请求到数据之后，就可以和items这个数组进行匹配
const items:MenuItem[]=[
  {
    label:'栏目 1',
  key:'/page1',
  icon:<PieChartOutlined />,
  },
  {
      label: '栏目 2',
  key: '/page2',
  icon: <DesktopOutlined />,
  },
  {
    label: '栏目 3',
  key:  'page3',
  icon: <UserOutlined />,
  children:[
    {
      label:'栏目 301',
      key:'/page3/page301',
    },
    {
      label:'栏目 302',
      key:'/page3/page302',
    },
    {
      label:'栏目 303',
      key:'/page3/page303',
    }
  ],
  },
  {
    label: '栏目 4',
    key:  'page4',
    icon:<TeamOutlined />,
    children:[
      {
        label:'栏目 401',
        key:'/page4/page401',
      },
      {
        label:'栏目 402',
        key:'/page4/page402',
      },
     
    ],
  },
  {
    label: '栏目 5',
    key: '/page5',
    icon: <FileOutlined />,
  }
]

//导出组件
const Comp: React.FC = ()=>{
    
  const navigateTo = useNavigate()
const currentRoute = useLocation();

  const menuClick=(e:{key:string})=>{
    
   //点击要跳转对应的路由  编程式导航跳转 利用hook
    navigateTo(e.key)

  }

  // //拿着currentRoute.pathname跟items数组的每一项的children的key作对比 如果相等 就要他上一级的key 给openKeys数组作初始值
  // let firstOpenKey:string="";
  // //对比
  // function findKey(obj:{key:string}){
  //   return obj.key === currentRoute.pathname
  // }
  // //要对比多个children
  // for(let i=0; i<items.length; i++){
  //   if(items[i]!['children'] && items[i]!['children'].length>0 && items[i]!['children'].find(findKey)){
  //     firstOpenKey=items[i]!.key as string
  //     break;
  //   }
  // }
  
  let firstOpenKey:string="";
  let paths = currentRoute.pathname.split('/');
  if(currentRoute.pathname.length > 2){
    let firstOpenKeyPlus = "/"+paths[1]
    console.log(firstOpenKeyPlus)
  }
  // let splitKeys: Array<string> = currentRoute.pathname.split("/");
  // if (splitKeys.length > 1) {
  //   firstOpenKey = "/" + splitKeys[1];
  //   console.log(firstOpenKey)
  // }

  // useEffect(() => {
  //   setOpenKeys([firstOpenKey]);
  // }, []);

  //设置展开项的初始值
  const [openKeys, setOpenKeys] = useState([firstOpenKey]);

const handleOpenChange = (keys:string[])=>{
  
  //展开和回收菜单的时候执行这里的代码
  console.log(keys)//keys是一个数组，记录了当前哪一项菜单是展开的(用key来记录的)
  //把数组修改为只存储点击的最后一项的key 保存为最新的
  setOpenKeys([keys[keys.length-1]])
}
return (
    <Menu 
    theme="dark" 
    defaultSelectedKeys={[currentRoute.pathname]} //表示当前样式所在的选中项 是通过菜单项的key来选中的 是通过currentRoute.pathname来获取当前地址的
    mode="inline" 
    items={items} //菜单项数据
    onClick={menuClick}
    onOpenChange={handleOpenChange}//某项菜单展开和回收执行的事件
    openKeys={openKeys}//当前菜单展开项的key数组
   />
)

}
export default Comp;