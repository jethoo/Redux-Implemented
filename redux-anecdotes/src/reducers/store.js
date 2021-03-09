import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import AnecdoteReducer from './AnecdoteReducer'
import notification from './NotificationReducer'
import FilterReducer from './FilterReducer'
import { composeWithDevTools } from "redux-devtools-extension";


const reducer = combineReducers({
  anecdotes: AnecdoteReducer,
  notification: notification,
  filter: FilterReducer
})

const store = createStore(
  reducer, 
  composeWithDevTools(
    applyMiddleware(thunk)
  ))

export default store

