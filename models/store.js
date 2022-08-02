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
    storeImageName: {
        type: String,
        required: true
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Item'

    }

})


module.exports = mongoose.model('Store', storeSchema)