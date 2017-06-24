var createStore=require('redux').createStore
//var store=createStore(()=>{})
var combineReducers=require('redux').combineReducers

var reducer_1=(state={income:0,outcom:0,remain:0},action)=>{
    console.log("IN Reducer_1 Comes The Action:",action)
    switch(action.type){
        case "ACTION_INCOME":
            return Object.assign({},state,{income:state.income+action.income,remain:state.remain+action.income})
        case "ACTION_OUTCOME":
            return Object.assign({},state,{outcome:state.outcome+action.outcome,remain:state.remain-action.outcome})
        case "ACTION_SET_REMAIN":
            return Object.assign({},state,{remain:action.remain})
        default:
            return state
    }
}

var reducer_2=(state=[],action)=>{
    console.log("In Reducer_2 Comes The Action:",action)
    switch(action.type){
        case "ACTION_ADD_PEOPLE":
            return [...state].push(action.people)
        case "ACTION_REMOVE_PEOPLE":
            return state.map((v,k)=>{
                if(k!=action.key)return v
            })
        default:
            return state
    }
}

cb=combineReducers({
    money:reducer_1,
    people:reducer_2
})
var store=createStore(cb)
console.log(store.getState())

