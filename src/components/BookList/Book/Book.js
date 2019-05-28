import React from 'react'

function Book (props){
  let book = props.books.map(item =>{
    return(<li>
      <h2>{item.volumeInfo.title}</h2>
      <p>Author(s): {item.volumeInfo.authors}</p>
      <p>Price: {item.saleInfo.listPrice}</p>
    </li>
)
  })
  
  return(
    <div>
      {book}
    </div>
  )
}

export default Book