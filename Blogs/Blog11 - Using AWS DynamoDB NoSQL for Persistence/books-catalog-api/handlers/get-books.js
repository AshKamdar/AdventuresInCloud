'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function getBooks(bookid) {
  if (typeof bookid === 'undefined')
    return docClient.scan({
      TableName: 'books-catalog'
    }).promise()
      .then(result => result.Items)

  return docClient.get({
    TableName: 'books-catalog',
    Key: {
      id: bookid
    }
  }).promise()
    .then(result => result.Item)
}

module.exports = getBooks
