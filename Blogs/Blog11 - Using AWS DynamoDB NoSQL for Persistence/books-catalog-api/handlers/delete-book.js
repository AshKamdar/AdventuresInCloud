'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function deleteBook(bookId) {
    return docClient.delete({
            TableName: 'books-catalog',
            Key: {
                id: bookId
            }
        }).promise()
        .then((result) => {
            console.log('Book is deleted!', result)
            //return result
            return 'Book is deleted!'
        })
        .catch((deleteError) => {
            console.log(`Oops, Book is not deleted :(`, deleteError)
            throw deleteError
        })
}

module.exports = deleteBook
