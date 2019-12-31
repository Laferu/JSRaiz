function AppComponente() {
  return (
    React.createElement('h1', null, 'Olá JSRaiz!')
  )
}

ReactDOM.render(
  React.createElement(AppComponente),
  document.getElementById('app')
)