'use strict'

const ApiBuilder = require('claudia-api-builder'),
booksApi = new ApiBuilder();

const getBooks = require('./handlers/get-books')
const addBook = require('./handlers/add-book')
const deleteBook = require('./handlers/delete-book')
const updateBook = require('./handlers/update-book')

module.exports = booksApi;

//default route
booksApi.get('/', () => 'Welcome to Books Catalog API')

//GetBooks route
booksApi.get('/books', () => {
  return getBooks()
}, {
  success: 201,
  error: 400
})

//GetBookById route
booksApi.get('/books/{id}', (request) => {
  return getBooks(request.pathParams.id)
}, {
  error: 404
}, {
  success: 201,
  error: 400
})

//AddBook route
booksApi.post('/bookadd', (request) => {
  return addBook(request.body)
}, {
  success: 201,
  error: 400
})

//DeleteBook route
booksApi.delete('/bookdelete/{id}', (request) => {
  return deleteBook(request.pathParams.id)
}, {
  success: 201,
  error: 400
})

//UpdateBook route
booksApi.put('/bookupdate/{id}', (request) => {
  return updateBook(request.pathParams.id)
}, {
  success: 201,
  error: 400
})
