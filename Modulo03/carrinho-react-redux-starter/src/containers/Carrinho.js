import { connect } from 'react-redux'
import CarrinhoComponent from '../Components/Carrinho'
import { removeItem } from '../actions'

const mapStateToProps = state => {
  return {
    itens: state
  }
}

const mapDispatchToProps = dispatch => ({
  onClick (itemId) {
    dispatch(removeItem(itemId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarrinhoComponent)
