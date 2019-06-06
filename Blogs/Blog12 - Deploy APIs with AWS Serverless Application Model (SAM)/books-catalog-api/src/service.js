'use strict';

const aws = require('aws-sdk');
const uuid = require('uuid/v4');

const BooksCatalogTableName = process.env.TABLE_NAME;

exports.addBook = async (book) => {
  // Generate a unique ID for the new book
  book.id = uuid();

  const params = {
    TableName: BooksCatalogTableName,
    Item: book
  };

  const dynamoDB = new aws.DynamoDB.DocumentClient();
  try {
    await dynamoDB.put(params).promise();
  } catch (error) {
    console.log(`Failed to add book: ${error}`);
    throw error;
  }
};

exports.getBook = async (id) => {
  const params = {
    TableName: BooksCatalogTableName,
    Key: {
      id: id
    }
  };

  const dynamoDB = new aws.DynamoDB.DocumentClient();
  try {
    const result = await dynamoDB.get(params).promise();
    return result.Item === undefined ? null : result.Item;
  } catch (error) {
    console.log(`Failed to get book with id "${id}": ${error}`);
    throw error;
  }
};

exports.listBooks = async () => {
  const params = {
    TableName: BooksCatalogTableName
  };

  const dynamoDB = new aws.DynamoDB.DocumentClient();
  try {
    const results = await dynamoDB.scan(params).promise();
    return results.Items;
  } catch (error) {
    console.log(`Failed to fetch books: ${error}`);
    throw error;
  }
};

exports.updateBook = async (id, book) => {
  book.id = id;
  const params = {
    TableName: BooksCatalogTableName,
    Item: book
  };

  const dynamoDB = new aws.DynamoDB.DocumentClient();
  try {
    await dynamoDB.put(params).promise();
  } catch (error) {
    console.log(`Failed to update book: ${error}`);
    throw error;
  }
};

exports.deleteBook = async (id) => {
  const params = {
    TableName: BooksCatalogTableName,
    Key: {
      id: id
    }
  };

  const dynamoDB = new aws.DynamoDB.DocumentClient();
  try {
    await dynamoDB.delete(params).promise();
  } catch (error) {
    console.log(`Failed to delete book with id "${id}": ${error}`);
    throw error;
  }
};
