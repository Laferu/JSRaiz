import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import CardComponent from '../Components/Card'
import PaginacaoComponent from '../Components/Paginacao'
import NavComponent from '../Components/Nav'
import { Creators as carrinhoCreators } from '../ducks/carrinho'
import {
  Selectors as produtosSelector,
  Operations as produtosCreators
} from '../ducks/produtos'
import { bindActionCreators } from 'redux'

const ListaProdutos = props => {
  // console.log(props.loading)
  useEffect(() => {
    if (props.itens.length <= 0 && !props.loading) {
      props.buscaProdutos()
    }
  }, [])

  return (
    <>
      <NavComponent />
      <hr />
      <PaginacaoComponent
        {...props.paginacao}
        onClick={props.buscaProdutos}
      />
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
    </>
  )
}

const mapStateToProps = state => ({
  itens: produtosSelector.getProdutos(state),
  loading: produtosSelector.isLoading(state),
  paginacao: produtosSelector.getPaginacao(state)
})

const mapDispatchToProps = dispatch => {
  return {
    onClick: item => {
      dispatch(carrinhoCreators.addItem(item))
    },
    ...bindActionCreators(produtosCreators, dispatch)
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaProdutos)
