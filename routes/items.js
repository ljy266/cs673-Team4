const express = require('express')
const router = express.Router()
const Item = require('../models/item')

//All items route
router.get('/', (req,res) => {
    res.render('items/index')
})


//new item Route
router.get('/new',(req, res) => {
    res.render('items/new', {item: new Item()})
})

//create item Route
router.post('/', (req, res) =>{
    res.send('Create')
})

module.exports = router