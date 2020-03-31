import React from 'react'

const Paginacao = ({ proxima, anterior, ultima, atual, onClick }) => {
  return (
    <nav>
      <ul className='pagination'>
        {
          anterior && <li className='page-item'><button onClick={() => onClick(anterior)} className='page-link'>Previous</button></li>
        }
        {
          [...new Array(ultima)].map((e, index) => (
            <li key={index} className={`page-item${index + 1 === atual ? ' disabled' : ''}`}>
              <button
                onClick={() => onClick(index +1)}
                className='page-link'
              >
                  {index + 1}
              </button>
            </li>
          ))
        }
        {
          proxima && <li className='page-item'><button onClick={() => onClick(proxima)} className='page-link'>Next</button></li>
        }
      </ul>
    </nav>
  )
}

export default Paginacao