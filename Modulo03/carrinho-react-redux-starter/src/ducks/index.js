import { combineReducers } from 'redux'
import carrinhoReducers from './carrinho'
import produtosReducer from './produtos'

const rootReducers = combineReducers({
  produtos: produtosReducer,
  carrinhoItens: carrinhoReducers
})

export default rootReducers
