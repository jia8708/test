const store={
    state:{
        num:20
    },
    actions:{
        add1(newState:{num:number}){
            newState.num++
        },
        add2(newState:{num:number},action:{type:string,value:number}){
            newState.num+=action.value
        },
    },
    //名字统一管理
    // add1:"add1",
    // add2:"add2"

    // actionNames:{
    //     add1:"add1",
    //     add2:"add2"
    // }

    actionNames:{}
}
//想做到actionNames根据actions自动生成
let actionNames={}
for(let key in store.actions){
    actionNames[key]=key
}
store.actionNames=actionNames
export default store

//封装的目的：最终利于我们的开发或者维护 例如后续需要添加数据和方法 只需要在某一个文件里写就可以了