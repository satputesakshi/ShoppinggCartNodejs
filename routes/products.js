const express = require('express')
const router = express.Router()
const Product = require('../models/product')
 
 
// Getting all
router.get('/', async(req, res) => {
    try {
        const product = await Product.find()
        res.json(product)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
 
// Getting One
router.get('/:id', getProduct, (req, res) => {
    res.json(res.product)
})
 
// Creating one
router.post('/', async(req, res) => {
    const product = new Product({
        prodPrice: req.body.prodPrice,
        produrl: req.body.produrl,
        prodDesc: req.body.prodDesc,
        rate: req.body.rate,
        type: req.body.type,
        prodName: req.body.prodName
    })
    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
 
// Updating One
 router.patch('/:id', getProduct, async(req, res) => {
    if (req.body.prodName != null) {
        res.product.prodName = req.body.prodName
    }
    if (req.body.rate != null) {
        res.product.rate = req.body.rate
    }
    if (req.body.prodPrice != null) {
        res.product.prodPrice = req.body.prodPrice
    }
 
    try {
        const updatedProduct = await res.product.save()
        res.json(updatedProduct)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}) 
 
// Deleting One
router.delete('/:prodName', getProduct, async(req, res) => {
    try {
        await res.product.remove()
        res.json({ message: 'Deleted product' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
 
async function getProduct(req, res, next) {
    let product
    try {
        product = await Product.findById(req.params.id)
        if (product == null) {
            return res.status(404).json({ message: 'Cannot find product' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
 
    res.product = product
    next()
}
 
 
module.exports = router
