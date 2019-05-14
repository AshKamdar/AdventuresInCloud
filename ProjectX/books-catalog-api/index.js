'use strict'

const ApiBuilder = require('claudia-api-builder'),
booksapi = new ApiBuilder();

const getBooks = require('./handlers/get-books')
//const addBook = require('./handlers/add-book')
//const updateBook = require('./handlers/update-book')
//const deleteBook = require('./handlers/delete-book')

module.exports = booksapi;


//default route
booksapi.get('/', () => 'Welcome to Books Catalog API')

//getbooks route
booksapi.get('/books', () => {
  return getBooks()
})


