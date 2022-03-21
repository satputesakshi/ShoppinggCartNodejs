const express = require('express')
const router = express.Router()
const Customer = require('../models/customer')
 
 
// Getting all
router.get('/', async(req, res) => {
    try {
        const customer = await Customer.find()
        res.json(customer)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

 
module.exports = router
