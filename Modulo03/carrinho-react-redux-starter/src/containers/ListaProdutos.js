import React from 'react'
import { connect } from 'react-redux'
import CardComponent from '../Components/Card'
import { addItem } from '../actions'

import produtosLista from '../data'

const ListaProdutos = props => (
  <div className='row'>
    {produtosLista.map((produto, index) => (
      <CardComponent
        item={produto}
        onClick={props.onClick}
        key={`produto-${index}`}
      />
    ))}
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    onClick: item => {
      dispatch(addItem(item))
    }
  }
}

export default connect(null, mapDispatchToProps)(ListaProdutos)
