import React from 'react'
import ListaProdutos from './containers/ListaProdutos'
import CarrinhoComponent from './containers/Carrinho'

const AppComponent = () => {
  return (
    <>
      <div className='col-sm-8'>
        <ListaProdutos />
      </div>
      <div className='col-sm-4'>
        <CarrinhoComponent />
      </div>
    </>
  )
}

export default AppComponent
