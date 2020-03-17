import produtosMock from '../data'

const getProdutos = state => state.produtos

export const Selectors = {
  getProdutos
}

const produtosReducer = (state = produtosMock, action) => {
  return state
}

export default produtosReducer
