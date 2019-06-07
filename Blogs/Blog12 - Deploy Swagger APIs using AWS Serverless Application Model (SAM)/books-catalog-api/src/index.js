'use strict';

const service = require('./service.js');

exports.getAllBooks = async (event) => {
  const books = await service.getAllBooks();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(books, null, 2)
  };
};

exports.addBook = async (event) => {
  //const hostname = event.headers.Host;
  //console.log("host name:" + hostname)

  const path = event.requestContext.path;
  let book = JSON.parse(event.body);

  await service.addBook(book);
  return {
    statusCode: 201,
    /*
    headers: {
      'Location': `https://${hostname}${path}/${book.id}`
    }
    */
    body: JSON.stringify("book has been added", null, 2)
    
  };
};

exports.getBook = async (event) => {
  const id = event.pathParameters.id;

  const book = await service.getBook(id);
  if (book === null) {
    return {
      statusCode: 404
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(book, null, 2)
  };
};

exports.updateBook = async (event) => {
  const id = event.pathParameters.id;

  if (await service.getBook(id) === null) {
    return {
      statusCode: 404
  };
  }

  let book = JSON.parse(event.body);

  await service.updateBook(id, book);

  return {
    statusCode: 200,
    body: JSON.stringify("book details updated", null, 2)
  };
};

exports.deleteBook = async (event) => {
  const id = event.pathParameters.id;

  if (await service.getBook(id) === null) {
    return {
      statusCode: 404
    };
  }

  await service.deleteBook(id);

  return {
    statusCode: 200,
    body: JSON.stringify("book is deleted", null, 2)
  };
};
