const express = require('express');
const compression = require('compression')
const morgan = require('morgan')

const logger = require('./middlewares/custom.js')



const app = express();
// app.use(logger)

// app.use(morgan('dev'))
app.use(compression())
app.use(express.json())


const routeBook = require('./routers/routeBook')
const routeUser = require('./routers/routeUser')

app.use('/api/v1/book',routeBook)
app.use('/api/v1/user',routeUser)


    

module.exports = app