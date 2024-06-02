import { useRoutes,useLocation,useNavigate } from 'react-router-dom';
import router from "./router"
//import { useUser } from '@/LoginStatus/UserProvider';
import { useEffect } from 'react';
import {message} from "antd"

// // 用户字段类型（如果需要，可以扩展此类型）
// type FieldType = {
//   username?: string;
//   password?: string;
//   role?:string;
// };

// // 上下文值类型
// type UserContextType = {
//   user: FieldType | null; // 用户对象或null
//   login: (username: string, password: string) => void;
//   logout: () => void;
// };
function App() {
  
  const location = useLocation();
  const navigate = useNavigate();
  const user = localStorage.getItem('username')

  // 路由守卫逻辑
  useEffect(() => {
    if (location.pathname === "/login" && user) {
      message.info('您已经登录过了！');
      navigate('/page1'); // 如果已登录，导航到主页
    } else if (!user&&location.pathname !== "/login" ) {
      message.info('请先登录！');
      navigate('/login'); // 如果未登录且不在登录页面，导航到登录页面
    }
  }, [location.pathname, user, navigate]);

  // 使用 useRoutes 来渲染路由

  const outlet = useRoutes(router);
  //const { user } = useUser() as UserContextType;
  // console.log(user)
  console.log(localStorage)
  return (
    <div className='App'>
      {/* 占位符组件，类似于窗口，用于展示组件 */}
      {outlet}
    </div>
  );
}

export default App;