
const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');

// state
const initialState = {
  loading: false,
  users: [],
  error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'


// actions

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users
  }
}

const fetchUsersFailure = (errors) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: errors
  }
}

// reducers

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case FETCH_USERS_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default :
      return initialState
  }
}

// async action creator
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest)
    axios.get('https://jsonplaceholder.typicode.com/users').then( (response) => {
      const users = response.data.map(user => user.id)
      dispatch(fetchUsersSuccess(users))
    }).catch(error => {
      dispatch(fetchUsersFailure(error.message))
    })
  }
}

const store = createStore(reducer, applyMiddleWare(thunkMiddleware))

store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())
