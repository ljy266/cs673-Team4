const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
    storeName:{
        type: String,
        required: true
    },
    store:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },

})


module.exports = mongoose.model('Book', storeSchema)