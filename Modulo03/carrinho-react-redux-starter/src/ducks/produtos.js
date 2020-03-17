const Types = {
  DONE: 'PRODUTOS_DONE',
  INIT: 'PRODUTOS_INIT'
}

const produtosFinalizado = payload => ({
  type: Types.DONE,
  payload
})

const produtosInicializando = payload => ({
  type: Types.INIT
})

const buscaProdutos = () => {
  return dispatch => {
    dispatch(produtosInicializando())
    window
      .fetch('http://localhost:3000/produtos')
      .then(data => data.json())
      .then(produtos => {
        dispatch(produtosFinalizado(produtos))
      })
  }
}

export const Operations = {
  buscaProdutos
}

const produtosReducer = (state = { data: [] }, action) => {
  console.log(action.payload)
  switch (action.type) {
    case Types.INIT:
      return {
        ...state,
        loading: true
      }
    case Types.DONE:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      }
    default:
      return state
  }
}

const getProdutos = state => state.produtos.data

const isLoading = state => state.produtos.loading

export const Selectors = {
  getProdutos,
  isLoading
}

export default produtosReducer
