const express = require('express')
const route = express.Router()

const {
    createUser
} = require('../controllers/UserController')

route
    .route('/reg')
        .post(createUser)

module.exports = route