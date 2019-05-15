'use strict'

const ApiBuilder = require('claudia-api-builder'),
booksApi = new ApiBuilder();

const getBooks = require('./handlers/get-books')
const addBook = require('./handlers/add-book')
//const updateBook = require('./handlers/update-book')
//const deleteBook = require('./handlers/delete-book')

module.exports = booksApi;


//default route
booksApi.get('/', () => 'Welcome to Books Catalog API')

//getbooks route
booksApi.get('/books', () => {
  return getBooks()
})

//bookaddk route
booksApi.post('/bookadd', (request) => {
  return addBook(request.body)
})

