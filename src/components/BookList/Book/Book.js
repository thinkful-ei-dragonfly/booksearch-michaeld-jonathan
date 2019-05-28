import React from 'react'

function Book (props){
  let book = props.books.map(item =>{
    if(item.saleInfo.saleability === "FOR_SALE"){
      return(<li>
        <h2>{item.volumeInfo.title}</h2>
        <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="book-preview"></img>
        <p>Author: {item.volumeInfo.authors}</p>
        <p>Price: {item.saleInfo.listPrice.amount}</p>
        <p>{item.volumeInfo.description}</p>
      </li>)
    }
    else{
      return(<li>
        <h2>{item.volumeInfo.title}</h2>
        <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="book-preview"></img>
        <p>Author: {item.volumeInfo.authors}</p>
        <p>Price: Not For Sale</p>
        <p>{item.volumeInfo.description}</p>
      </li>)
      }
    

  })
  
  return(
    <div>
      {book}
    </div>
  )
}

export default Book