import React, { createContext, useState, useContext } from 'react';
import users from "@/message"

// 用户字段类型（如果需要，可以扩展此类型）
type FieldType = {
    username?: string;
    password?: string;
    role?:string;
  };
  
  // 上下文值类型
  type UserContextType = {
    user: FieldType | null; // 用户对象或null
    login: (username: string, password: string) => void;
    logout: () => void;
  };

// 创建上下文
const UserContext = createContext<UserContextType | undefined>(undefined);
  
//使用上下文
export const useUser = () => useContext(UserContext);

// UserProvider组件
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<FieldType | null>(null);

     const login = (username: string, password: string) => {

      const user = users.find((u) => u.username === username && u.password === password);
      if (user) {
        setUser({ username: user.username,password:user.password,role:user.role }); // 保存用户信息
      }
    };
    
  
    const logout = () => {
      setUser(null); // 清除用户信息
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('expires');
    };
  
    return (
      <UserContext.Provider value={{ user, login, logout }}>
        {children}
      </UserContext.Provider>
    );
  };


  
