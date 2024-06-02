import NumStatus from "./index"

//用来管理数据的

let reducer=(state={...NumStatus.state},action:{type:string,value:number})=>{
//dispatch会触发这个函数的调用

    let newState = JSON.parse(JSON.stringify(state))//深拷贝

    //故把action.type与actionNames的每一项作对比
    for(let key in NumStatus.actionNames){
        if(action.type===NumStatus.actionNames[key]){
            NumStatus.actions[NumStatus.actionNames[key]](newState,action)
            break
        }
    }
    //这样就可以做到添加一个方法，不用在reducer里添加case

    return newState
}

export default reducer