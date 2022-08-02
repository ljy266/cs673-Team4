const express = require('express')
const router = express.Router()
const Store = require('../models/store')

//All stores route
router.get('/', async (req, res) => {
    res.send('allbooks')
})


//new store Route
router.get('/new', (req, res) => {
    res.send('newbooks')
})

//create store Route
router.post('/', async (req, res) => {
    res.send('createbook')
})

module.exports = router