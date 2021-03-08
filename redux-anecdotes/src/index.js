import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers/store'
import notification from './reducers/NotificationReducer'
import { composeWithDevTools } from "redux-devtools-extension";

const newReducer = combineReducers({
  anecdotes: reducer,
  notification: notification
})

const store = createStore(newReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)