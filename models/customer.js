const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    custId: {
        type: String,
        required: true
    },
    custName: {
        type: String,
        required: true
    },   
    Email: {
        type: String,
        required: true
    },
    custPswd: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    addLine1: {
        type: String,
        required: true
    } , 
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }    
})
module.exports = mongoose.model('Customer', customerSchema)
