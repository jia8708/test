//组件形式的路由写法

import App from "../App"
import Home from "../views/Home"
import About from "../views/About"
import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom"

const baseRouter = ()=>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                {/* 配置当用户访问"/"时，重定向到/home去 */}
                <Route path="/" element={<Navigate to="/home"/>}/>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter;