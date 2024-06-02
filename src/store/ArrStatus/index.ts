const store={
    state:{
        sarr:[10,20,30]
    },
    actions:{
        sarrpush(newState:{sarr:number[]},action:{type:string,value:number}){
            newState.sarr.push(action.value)
        }
    },
    // actionNames:{
    //     sarrpush:"sarrpush"
    // }
    actionNames:{}
    
}
let actionNames={}
for(let key in store.actions){
    actionNames[key]=key
}
store.actionNames=actionNames

export default store