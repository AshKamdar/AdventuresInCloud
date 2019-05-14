'use strict'

const booklist = require('../handlers/booklist.json')


function getBooks() {
    return booklist;
}

module.exports = getBooks
