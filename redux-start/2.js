var createStore=require('redux').createStore
var store=createStore(()=>{})
var combineReducers=require('redux').combineReducers
console.log(store.getState())

var reducer1=(state={},action)=>{
    switch(action.type){
        case "ACTION_MSG":
            return Object.assign({},state,{msg:action.msg})
        default:
            return state
    }
}
var store1=createStore(reducer1)
console.log(store1.getState())

var userReducer = function (state = {}, action) {
    console.log('userReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        case "ACTION_NULL":
            console.log("OK,That is NULL Action...@@@@@@@@@@user")
            return state;
        default:
            return state;
    }
}
var itemsReducer = function (state = [], action) {
    console.log('itemsReducer was called with state', state, 'and action', action)

    switch (action.type) {
        // etc.
        case "ACTION_NULL":
            console.log("OK,That is NULL Action...@@@@@@@@@@item")
            return state;
        case "ACTION_ADD":
            return [...state].concat([action.item])
        default:
            return state;
    }
}
var addItem=(item)=>{
    return {
        type:"ACTION_ADD",
        item:item
    }
}

var cb=combineReducers({
    items:itemsReducer,
    user:userReducer
})
console.log(cb)

var store4=createStore(cb)

console.log(store4.getState())

store4.dispatch(addItem({
    foo:"foo",
    bar:"bar"
}))

console.log(store4.getState())

store4.dispatch({
        type:"ACTION_NULL"
    })
// store4.dispatch({
//         type:"ACTION_NULL"
//     })