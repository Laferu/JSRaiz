export const Types = {
  ADD: 'ADICIONA_ITEM',
  REMOVE: 'REMOVE_ITEM'
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          quantidade: state[action.payload.id] ? state[action.payload.id].quantidade + 1 : 1
        }
      }
    case Types.REMOVE:
      return (state[action.payload.id].quantidade <= 1)
        ? Object.keys(state).reduce((acc, produtoId) => {
          return {
            ...acc,
            ...(produtoId === action.payload.id || { [produtoId]: state[produtoId] })
          }
        }, {})
        : {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            quantidade: state[action.payload.id].quantidade - 1
          }
        }
    default:
      return state
  }
}

const addItem = produto => {
  return {
    type: Types.ADD,
    payload: produto
  }
}

const removeItem = itemId => {
  return {
    type: Types.REMOVE,
    payload: {
      id: itemId
    }
  }
}

export const Creators = {
  addItem,
  removeItem
}

const getItens = state => state.carrinhoItens

export const Selectors = {
  getItens
}

export default reducer
