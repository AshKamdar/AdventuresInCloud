'use strict';

const service = require('./service.js');

exports.listBooks = async (event) => {
  const books = await service.listBooks();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(books, null, 2)
  };
};

exports.addBook = async (event) => {
  const hostname = event.headers.Host;
  const path = event.requestContext.path;

  let book = JSON.parse(event.body);

  await service.addBook(book);
  return {
    statusCode: 201,
    headers: {
      'Location': `https://${hostname}${path}/${book.id}`
    }
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
    statusCode: 200
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
    statusCode: 200
  };
};
