const mongoose = require('mongoose')
 
const productSchema = new mongoose.Schema({
    prodPrice: {
        type: String,
        required: true
    },
    produrl: {
        type: String,
        required: true
    },
    prodDesc: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    prodName: {
        type: String,
        required: true
    }
})
 
module.exports = mongoose.model('Product', productSchema)
