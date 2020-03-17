import React from 'react'
import ReactDOM from 'react-dom'
import AppComponent from './App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducers from './ducks'

const meuMiddleware = store => next => action => {
  console.log(store, next, action)
  next(action)
}

const store = createStore(
  rootReducers,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('app')
)
