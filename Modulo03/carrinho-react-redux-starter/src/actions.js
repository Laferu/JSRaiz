export const addItem = produto => {
  return {
    type: 'ADICIONA_ITEM',
    payload: produto
  }
}

export const removeItem = produtoId => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id: produtoId
    }
  }
}