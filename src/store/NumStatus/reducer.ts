import NumStatus from "./index"

//用来管理数据的

let reducer=(state={...NumStatus.state},action:{type:string,value:number})=>{
//dispatch会触发这个函数的调用

    let newState = JSON.parse(JSON.stringify(state))//深拷贝

    //因为switch是拿着括号里的东西与case一一对比，很像遍历，
    //但只有数组和对象能遍历，故把所有名称抽成一个对象actionNames
    // switch(action.type){
    //     case NumStatus.add1:
    //         NumStatus.actions[NumStatus.add1](newState)
    //         break
    //     case NumStatus.add2:
    //         NumStatus.actions[NumStatus.add2](newState,action)
    //         break
    //     default:
    //         break
    // }

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