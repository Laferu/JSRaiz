const produtos = [
  {
    id: 'abc123',
    nome: 'JSRaiz para FW',
    preco: 300,
    descricao: 'O melhor curso do mundo',
    imagem: 'https://lorempixel.com/500/300'
  },
  {
    id: 'abc321',
    nome: 'JSRaiz para FW',
    preco: 1200,
    descricao: 'O melhor curso do mundo',
    imagem: 'https://lorempixel.com/500/300'
  }
]

function ListaProdutosComponente({item, index, adicionaCarrinho}) {
  return (
      React.createElement('div', { className: 'col-sm-4 mb-3', key: index },
        React.createElement('div', { className: 'card loja__item' },
          React.createElement('img', { className: 'card-img-top', src: item.imagem }),
          React.createElement('div', { className: 'card-body' },
            React.createElement('h5', { className: 'card-title' }, item.nome),
            React.createElement('small', null, `R$ ${item.preco}`),
            React.createElement('p', { className: 'card-text' }, item.descricao),
            React.createElement('button', { className: 'btn btn-primary', onClick: adicionaCarrinho.bind(null, item) }, 'Adicionar')
          )
        )
      )
    )

}

function CarrinhoComponent({item, removeCarrinho}) {
  const valorTotal = (carrinhoItems) => {
    return Object.keys(carrinhoItems).reduce((acc, valorAtual) => {
      return acc + (carrinhoItems[valorAtual].preco * carrinhoItems[valorAtual].quantidade)
    }, 0)
  }
  return (
    React.createElement('div', { className: 'carrinho' },
      Object.keys(item).map(e => (
        React.createElement('div', { className: 'carrinho__items' },
          React.createElement('div', { className: 'card carrinho__item' },
            React.createElement('div', { className: 'card-body' },
              React.createElement('h5', { className: 'card-title' }, item[e].nome),
              React.createElement('p', { className: 'card-text' }, `Preço unidade: R$ ${item[e].preco} | Quantidade: ${item[e].quantidade}`),
              React.createElement('p', { className: 'card-text' }, `Valor: R$ ${item[e].preco * item[e].quantidade}`),
              React.createElement('button', { className: 'btn btn-danger btn-sm', onClick: removeCarrinho.bind(null, item[e]) }, 'Remover')
            )
          )
        )
      )),
      React.createElement('div', { className: 'carrinho_total mt-2 p-3' },
        React.createElement('h6', null, 'Total: ',
          React.createElement('strong', null, `R$ ${valorTotal(item)}`)
        )
      )
    )
  )
}

function AppComponente() {
  const [carrinhoItems, setCarrinhoItems] = React.useState({})
  const adicionaCarrinho = (produto) => {
    if(!carrinhoItems[produto.id]) {
      setCarrinhoItems({
        ...carrinhoItems,
        [produto.id]: produto,
        [produto.id]: {
          ...produto,
          quantidade: 1
        }
      })
      return
    }
  
    setCarrinhoItems({
      ...carrinhoItems,
      [produto.id]: {
        ...produto,
        quantidade: ++carrinhoItems[produto.id].quantidade
      }
    })
  }

  const removeCarrinho = (produto) => {
    if(carrinhoItems[produto.id].quantidade <= 1){
      delete carrinhoItems[produto.id]
      setCarrinhoItems({ ...carrinhoItems })
      return
    }
    setCarrinhoItems({
      ...carrinhoItems,
      [produto.id]: {
        ...carrinhoItems[produto.id],
        quantidade: --carrinhoItems[produto.id].quantidade
      }
    })
  }
  return (
    React.createElement(React.Fragment, null,
      React.createElement('div', { className: 'col-sm-8' },
        React.createElement('div', { className: 'row loja' },
          produtos.map((item, index) => (
            React.createElement(ListaProdutosComponente, { item, index, adicionaCarrinho })
          ))
        )
      ),
      React.createElement('div', { className: 'col-sm-4' },
        React.createElement(CarrinhoComponent, { item: carrinhoItems, removeCarrinho })
      )
    )
  )
}

ReactDOM.render(
  React.createElement(AppComponente),
  document.getElementById('app')
)