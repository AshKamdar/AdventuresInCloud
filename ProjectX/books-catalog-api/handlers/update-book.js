'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function updateBook(id, book) {
    if (!book || !id)
        throw new Error('Book Id is required to update')

    return docClient.update({
            TableName: 'books',
            Key: { // <3>
                id: id
            },
            UpdateExpression: 'set author=:a, price = :p',
            ExpressionAttributeValues: {
                ':p': book.price,
                ':a': book.author
            },
            ReturnValues: 'ALL_NEW'
        }).promise()
        .then((result) => {
            console.log('Book is updated!', result)
            return result.Attributes
        })
        .catch((updateError) => {
            console.log(`Oops, Book is not updated :(`, updateError)
            throw updateError
        })
}

module.exports = updateBook
