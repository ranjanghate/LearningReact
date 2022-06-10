const redux = require('redux')

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED' // type
const CAKE_RESTORED = 'CAKE_RESTORED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED' // type
const ICECREAM_RESTORED = 'ICECREAM_RESTORED'

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

// action
function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty
  }
}

// action
function refillIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTORED,
    payload: qty
  }
}

const initialCakeState = {
  numofCakes: 10,
  anotherProperty: 0
}

const initialIcecreamState = {
  numofIcecreams: 20,
  anotherProperty: 0
}

const cakeReducer = (state = initialCakeState, action) => {
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


const icecreamReducer = (state = initialIcecreamState, action) => {
  switch(action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numofIcecreams: state.numofIcecreams - action.payload,
      }
    case ICECREAM_RESTORED:
      return {
        ...state,
        numofIcecreams: state.numofIcecreams + action.payload,
      }
    default:
      return state
  }
}

// Combine Reducers

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer
})

const store = createStore(rootReducer, redux.applyMiddleware(logger))

console.log('Intial State', store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderIcecream())
store.dispatch(orderIcecream())
store.dispatch(orderIcecream())
store.dispatch(refillCake())
store.dispatch(refillIcecream())
store.dispatch(refillCake())
store.dispatch(refillIcecream())
store.dispatch(refillCake())
store.dispatch(refillIcecream())

unsubscribe()
