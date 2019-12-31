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

const carrinhoItems = {}

function renderizaProduto(produto, index) {
  return `
    <div class="col-sm-4 mb-3">
      <div class="card" style="width: 18rem;">
        <div class="loja__item">
          <img src="${produto.imagem}" alt="" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <small>R$${produto.preco}</small>
            <p class="card-text">${produto.descricao}</p>
            <button data-index='${index}' href="#" data-value='300' class="btn btn-primary btn-add">Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  `
}

function renderizaProdutos() {
  let html = ''
  let i = 0
  produtos.map(e => {
    html = html + renderizaProduto(e, i)
    i++
  })
  return html
}

function renderCarrinhoTotal() {
  let total = 0
  for ( let produtoId in carrinhoItems) {
    total = total + (carrinhoItems[produtoId].preco * carrinhoItems[produtoId].quantidade)
  }

  document.querySelector('.carrinho__total').innerHTML = `<h6>Total: <strong>R$ ${total}</strong></h6>`
}

function adicionaItemNoCarrinho(produto) {
  if(!carrinhoItems[produto.id]) {
    carrinhoItems[produto.id] = produto
    carrinhoItems[produto.id].quantidade = 0
  }

  ++carrinhoItems[produto.id].quantidade

  renderizaCarrinho()
  renderCarrinhoTotal()
}

function renderizaItemCarrinho(carrinho) {
  return `
    <div class="card carrinho__item">
      <div class="card-body">
        <h5 class="card-title">${carrinho.nome}</h5>
        <p class="card-text">Preço unidade: ${carrinho.preco} | quantidade: ${carrinho.quantidade}</p>
        <p class="card-text">Valor: ${carrinho.preco * carrinho.quantidade}</p>
        <button href="#" data-produto-id='${carrinho.id}' class="btn btn-danger btn-sm btn-remove">Remover</button>
      </div>
    </div>
  `
}

function renderizaCarrinho() {
  let html = ''
  for ( let produtoId in carrinhoItems) {
    html = html + renderizaItemCarrinho(carrinhoItems[produtoId])
  }

  document.querySelector('.carrinho__items').innerHTML = html
}

document.body.addEventListener('click', function(event) {
  const elemento = event.target

  if(elemento.classList.contains('btn-add')){
    const index = parseInt(elemento.getAttribute('data-index'))
    const produto = produtos[elemento.getAttribute('data-index')]

    adicionaItemNoCarrinho(produto)
  }

  if(elemento.classList.contains('btn-remove')){
    const produtoId = elemento.getAttribute('data-produto-id')
    if(carrinhoItems[produtoId].quantidade <= 1) {
      delete carrinhoItems[produtoId]
      renderizaCarrinho()
      renderCarrinhoTotal()
      return
    }

    --carrinhoItems[produtoId].quantidade
    
    renderizaCarrinho()
    renderCarrinhoTotal()
  }
})

document.querySelector('.loja').innerHTML = renderizaProdutos()

