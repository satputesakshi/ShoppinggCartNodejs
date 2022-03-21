const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  
    custName: {
        type: String,
        required: true
    },   
    rate: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    } 
})
module.exports = mongoose.model('Review', commentSchema)