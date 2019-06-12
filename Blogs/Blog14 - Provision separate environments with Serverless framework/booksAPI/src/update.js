'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = (event, context, callback) => {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
            id: event.pathParameters.id,
        },
        ExpressionAttributeNames: {
            '#bookname': 'name',
        },
        ExpressionAttributeValues:{
            ":n":data.name,
            ":a":data.author,
            ":p":data.price
        },
        UpdateExpression: "set #bookname = :n, author=:a, price=:p",
        ReturnValues: 'UPDATED_NEW',
    };

    // update the todo in the database
    dynamoDb.update(params, (error, result) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not update book.',
            });
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Attributes),
        };
        callback(null, response);
    });
};
