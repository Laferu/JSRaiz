import produtosMock from '../data'

const Types = {
  DONE: 'PRODUTOS_DONE'
}

const buscaProdutos = () => {
  return dispatch => {
    window
      .fetch('http://localhost:3000/produtos')
      .then(data => data.json())
      .then(produtos => {
        dispatch({
          type: Types.DONE,
          payload: produtos
        })
      })
  }
}

export const Operations = {
  buscaProdutos
}

const produtosReducer = (state = { data: [] }, action) => {
  console.log(action.payload)
  switch (action.type) {
    case Types.DONE:
      return {
        ...state,
        data: action.payload.data
      }
    default:
      return state
  }
}

const getProdutos = state => state.produtos.data

export const Selectors = {
  getProdutos
}

export default produtosReducer
