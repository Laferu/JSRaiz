import React from 'react'
import ReactDOM from 'react-dom'
import AppComponent from './App'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducers from './ducks'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const soma = (a, b) => a + b
// const decrementa5 = valor => valor - 5

// const parOuImpar = valor => valor % 2 === 0 ? 'par' : 'impar'

// const novaFuncao = compose(parOuImpar, decrementa5, soma)

// console.log(nova0Funcao(12, 5))

const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('app')
)
