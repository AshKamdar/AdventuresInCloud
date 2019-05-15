'use strict'

const ApiBuilder = require('claudia-api-builder'),
booksApi = new ApiBuilder();

const getBooks = require('./handlers/get-books')
const addBook = require('./handlers/add-book')
const deleteBook = require('./handlers/delete-book')

//const updateBook = require('./handlers/update-book')

module.exports = booksApi;


//default route
booksApi.get('/', () => 'Welcome to Books Catalog API')

//GetBooks route
booksApi.get('/books', () => {
  return getBooks()
})

//AddBook route
booksApi.post('/bookadd', (request) => {
  return addBook(request.body)
})

//DeleteBook route
booksApi.delete('/bookdelete/{id}', (request) => {
  return deleteBook(request.pathParams.id)
})
