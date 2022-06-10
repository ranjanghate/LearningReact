const redux = require('redux')

const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators

const CAKE_ORDERED = 'CAKE_ORDERED' // type
const CAKE_RESTORED = 'CAKE_RESTORED'

// action
function orderCake(qty = 1) {
  return {
    type: CAKE_ORDERED,
    payload: qty
  }
}

// action
function refillCake(qty = 1) {
  return {
    type: CAKE_RESTORED,
    payload: qty
  }
}


const initialState = {
  numofCakes: 10,
  anotherProperty: 0
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numofCakes: state.numofCakes - action.payload,
      }
    case CAKE_RESTORED:
      return {
        ...state,
        numofCakes: state.numofCakes + action.payload,
      }
    default:
      return state
  }
}

// store (Holds application State)
const store = createStore(reducer)

// getState function
console.log('Initial State', store.getState())

// subscribe to changes in the store
// whenever state is updated callback function passed in subscribe will be invoked 
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

// dispatch method to update the state
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()

store.dispatch(orderCake())
const unsubscribe2 = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(orderCake())
store.dispatch(orderCake())
unsubscribe2()

const unsubscribe3 = store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

// refilling cake
store.dispatch(refillCake())
store.dispatch(refillCake())
store.dispatch(refillCake())
store.dispatch(refillCake())
store.dispatch(refillCake(5))
store.dispatch(refillCake(10))


//BindActionCreators
const action = bindActionCreators({ orderCake, refillCake}, store.dispatch);

action.orderCake()
action.orderCake()
action.refillCake()
action.refillCake()
