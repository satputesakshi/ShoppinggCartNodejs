const express = require('express')
const router = express.Router()
const Review = require('../models/review')

// Getting all
router.get('/', async(req, res) => {
    try {
        const comment = await Review.find()
        console.log(comment)
        res.json(comment)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


// Creating one
router.post('/post', async(req, res) => {
    const comment = new Review({
        //reviewId:req.body.reviewId,
        custName: req.body.custName,
        rate: req.body.rate,
        comment: req.body.comment,
        productId: req.body.productId,
    })
    try {
        const newComment = await comment.save()
        res.status(201).json(newComment)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router