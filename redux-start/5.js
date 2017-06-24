


let { createStore, combineReducers, applyMiddleware } =require( 'redux')
let thunk=require('redux-thunk').default
const finalCreateStore = applyMiddleware(thunk)(createStore)

var reducer = combineReducers({
    speaker: function (state = {}, action) {
        console.log('speaker was called with state', state, 'and action', action)

        switch (action.type) {
            case 'ACTION_HI':
                return {
                    message: action.message
                }
            default:
                return state
        }
    }
})

var SayHi=msg=>{
    return {
        type:"ACTION_HI",
        message:msg
    }
}
var async_SayHi = message=> {
    return (dispatch)=>{
        setTimeout(()=>{
            console.log(new Date(), 'Dispatch action now:')
            dispatch({
                type: 'ACTION_HI',
                message
            })
        }, 2000)
    }
}

const store_0 = finalCreateStore(reducer)
console.log("\n", new Date(), 'Running our async action creator:', "\n")
store_0.subscribe(()=>{
    console.log("store updated @@@@@@@@@@@")
})
store_0.dispatch(SayHi("I am sync"))
// store_0.dispatch(SayHi("I am sync"))
// store_0.dispatch(SayHi("I am sync"))
store_0.dispatch(async_SayHi('I am async'))

