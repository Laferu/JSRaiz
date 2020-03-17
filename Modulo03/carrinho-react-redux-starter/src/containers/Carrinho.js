import { connect } from 'react-redux'
import CarrinhoComponent from '../Components/Carrinho'
import { Creators } from '../ducks/carrinho'

const mapStateToProps = state => {
  return {
    itens: state.carrinhoItens
  }
}

const mapDispatchToProps = dispatch => ({
  onClick (itemId) {
    dispatch(Creators.removeItem(itemId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarrinhoComponent)
