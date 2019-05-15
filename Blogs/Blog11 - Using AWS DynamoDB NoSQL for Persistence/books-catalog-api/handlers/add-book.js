'use strict'

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

function addBook(book) {
    if (!book || !book.id || !book.name)
        throw new Error('Please provide Id and Name for hte book ')
            return docClient.put({
                    TableName: 'books',
                    Item: {
                        id: book.id,
                        name: book.name,
                        author: book.author,
                        price: book.price
                    }
                }).promise()
                .then((res) => {
                    //console.log('Book is added!', res)
                    //return res
                    return "Book is added"
                })
                .catch((saveError) => {
                    console.log(`Oops, Book is not saved :(`, saveError)
                    throw saveError
                })
        }
module.exports = addBook
