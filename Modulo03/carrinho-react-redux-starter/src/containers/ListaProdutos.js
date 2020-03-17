import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CardComponent from '../Components/Card'
import { Creators as carrinhoCreators } from '../ducks/carrinho'
import {
  Selectors as produtosSelector,
  Operations as produtosCreators
} from '../ducks/produtos'

const ListaProdutos = props => {
  // console.log(props.loading)
  useEffect(() => {
    props.buscaProdutos()
  }, [])

  return (
    <div className='row'>
      {
        props.loading
          ? (
            <strong>Carregando...</strong>
          )
          : props.itens.map((produto, index) => (
            <CardComponent
              item={produto}
              onClick={props.onClick}
              key={`produto-${index}`}
            />
          ))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  itens: produtosSelector.getProdutos(state),
  loading: produtosSelector.isLoading(state)
})

const mapDispatchToProps = dispatch => ({
  onClick: item => {
    dispatch(carrinhoCreators.addItem(item))
  },
  buscaProdutos: () => {
    dispatch(produtosCreators.buscaProdutos())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaProdutos)
