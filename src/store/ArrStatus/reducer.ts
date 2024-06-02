import ArrStatus from "./index"

//用来管理数据的

let reducer=(state={...ArrStatus.state},action:{type:string,value:number})=>{
//dispatch会触发这个函数的调用

    let newState = JSON.parse(JSON.stringify(state))//深拷贝
    // switch(action.type){
    //     case ArrStatus.sarrpush:
    //         ArrStatus.actions[ArrStatus.sarrpush](newState,action)
    //         break
    //     default:
    //         break
    // }
    for(let key in ArrStatus.actionNames){
        if(action.type===ArrStatus.actionNames[key]){
            ArrStatus.actions[ArrStatus.actionNames[key]](newState,action)
            break
        }
    }

    return newState
}

export default reducer