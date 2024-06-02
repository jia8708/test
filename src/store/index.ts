import { legacy_createStore,combineReducers } from "redux";
import NumStatus from "./NumStatus/reducer"
import ArrStatus from "./ArrStatus/reducer"

//组合各模块的reducers
const reducers = combineReducers({
    NumStatus,
    ArrStatus
})

//创建数据仓库
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()为了让浏览器正常使用redux dev tool
const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store