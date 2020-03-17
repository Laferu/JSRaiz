import React from 'react'
import { connect } from 'react-redux'
import CardComponent from '../Components/Card'
import { Creators as carrinhoCreators } from '../ducks/carrinho'
import { Selectors as produtosSelector } from '../ducks/produtos'

const ListaProdutos = props => (
  <div className='row'>
    {props.itens.map((produto, index) => (
      <CardComponent
        item={produto}
        onClick={props.onClick}
        key={`produto-${index}`}
      />
    ))}
  </div>
)

const mapStateToProps = state => ({
  itens: produtosSelector.getProdutos(state)
})

const mapDispatchToProps = dispatch => ({
  onClick: item => {
    dispatch(carrinhoCreators.addItem(item))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaProdutos)
