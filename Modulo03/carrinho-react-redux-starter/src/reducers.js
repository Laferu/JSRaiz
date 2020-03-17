const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADICIONA_ITEM':
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          quantidade: state[action.payload.id] ? state[action.payload.id].quantidade + 1 : 1
        }
      }
    case 'REMOVE_ITEM':
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

export default reducer
