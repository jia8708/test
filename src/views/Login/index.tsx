import { ChangeEvent, useEffect, useState } from "react"
import styles from "./login.module.scss"
import initLoginBg from "./init.ts"
import { Input,Space,Button } from 'antd';
import "./login.less"

const view=()=>{

    //加载完这个组件后
    useEffect(()=>{
        initLoginBg()
        window.onresize=function(){initLoginBg()}
    },[])

    //点击按钮
    const gotoLogin=()=>{
        console.log("用户输入的信息分别是：",usernameVal,passwordVal,captchaVal)
    }

    //获取用户输入的信息
    const [usernameVal,setUsernameVal] = useState("")//定义输入的用户名
    const [passwordVal,setPasswordVal] = useState("")//定义输入的用户名密码
    const [captchaVal,setCaptchaVal] = useState("")//定义输入的验证码

    const usernameChange=(e:ChangeEvent<HTMLInputElement>)=>{
        //console.log(e.target.value)
        setUsernameVal(e.target.value)
    }
    const passwordChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setPasswordVal(e.target.value)
    }
    const captchaChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setCaptchaVal(e.target.value)
    }

    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{display:"block"}}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox+ " loginbox"}>
                {/* 标题部分 */}
                <div className={styles.title}>
                    <h1>后台管理系统</h1>
                </div>
                {/* 表单部分 */}
                <div className="form">
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Input placeholder="用户名" onChange={usernameChange}/>
                    <Input.Password placeholder="密码" onChange={passwordChange}/>
                    <div className="captchaBox">
                    <Input placeholder="验证码" onChange={captchaChange}/>
                        <div className="captchaImage">
                            <img src="src\views\Login\图形验证码.png" height="38px"/>
                        </div>
                    </div>
                    <Button type="primary" className="loginBtn" block onClick={gotoLogin}>
                        登录
                    </Button>
                </Space>
                    
                </div>
            </div>
        </div>
    )
}
export default view