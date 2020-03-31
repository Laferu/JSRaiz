import React from 'react'

//TODO: listar as categorias e fazer o filtro para os produtos

const Nav = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <a className='nav-link active' href='#'>Todas</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link ' href='#'>Book</a>
      </li>
      
    </ul>
  )
}

export default Nav