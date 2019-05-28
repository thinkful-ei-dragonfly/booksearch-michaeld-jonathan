import React from 'react'
import Book from './Book/Book'

function BookList (props){
  return (
    <ul>
      <Book books={props.books} />
    </ul>
  )
}

export default BookList

