const express = require('express')
const route = express.Router()
const custom = require('../middlewares/custom')

const {
    createBook,
    getAllBook,
    getBookById,
    deleteById,
    updateBookById,
    query,
    getQueryBook
} = require('../controllers/BookController')


route
    .route('/addBook')
        .post(createBook)
route
    .route('/getAllBook')
        .get(getAllBook)

route
    .route('/query')
        .get(custom,query,getQueryBook)

route
    .route('/:id')
        .get(getBookById)
        .delete(deleteById)
        .put(updateBookById)

module.exports = route