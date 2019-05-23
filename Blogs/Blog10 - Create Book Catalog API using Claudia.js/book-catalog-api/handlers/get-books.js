'use strict'

const booklist = require('../handlers/booklist.json')


function getBooks(bookid) {

  if (!bookid)
    return booklist;

  const book = booklist.find((book) => {
    return book.id == bookid
  })

  if (book)
    return book

  throw new Error('The book you requested was not found')
}

module.exports = getBooks
