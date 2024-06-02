//全局声明

//类型声明文件里不建议这样写import...from...
//而是import("@/store")
// import store from "@/store"

//TS提供了ReturnType用来获取函数类型的返回值
type RootState = ReturnType<typeof import("@/store").getState>//获取仓库里的类型

interface Window{
    __REDUX_DEVTOOLS_EXTENSION__:function
}