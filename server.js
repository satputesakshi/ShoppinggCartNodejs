require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')

mongoose.connect('mongodb://localhost:27017/ShoppingCartNode', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(cors())

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)
const reviewsRouter = require('./routes/reviews')
app.use('/reviews', reviewsRouter)
const customersRouter = require('./routes/customers')
app.use('/customers', customersRouter)

app.listen(3000, () => console.log('Server Started'))