import React from 'react'
import { connect } from 'react-redux'
import CardComponent from '../Components/Card'
import { addItem } from '../actions'

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
  itens: state.produtos
})

const mapDispatchToProps = dispatch => ({
  onClick: item => {
    dispatch(addItem(item))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaProdutos)
