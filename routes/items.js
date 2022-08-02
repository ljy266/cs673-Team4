const express = require('express')
const router = express.Router()
const Item = require('../models/item')




//All items route
// router.get('/', async (req, res) => {
//     let searchOptions = {}
//     if (req.query.name != null && req.query.name !== '') {
//         searchOptions.name = new RegExp(req.query.name, 'i')
//     }
//     try {
//         const items = await Item.find(searchOptions)
//         res.render('items/index', {
//             items: items,
//             searchOptions: req.query
//         })
//     } catch {
//         res.redirect('/')
//     }
// })


// calculate item Route
router.get('/calculation', (req, res) => {
    res.send([
        {
            "name": "Trader Joes",
            "picture": "Picture Route",
            "description": "MWF 8am - 10pm",
            "total": "$56.00",
            "groceries": [
                {
                    "name": "Tomato1",
                    "image": "../salmon.png",
                    "price": "$28.00"
                },
                {
                    "name": "Tomato2",
                    "image": "../salmon.png",
                    "price": "$28.00"
                },
                {
                    "name": "Tomato3",
                    "image": "../salmon.png",
                    "price": "$28.00"
                }
            ]
        }])
})


//new item Route
router.get('/new', (req, res) => {
    res.render('items/new', { item: new Item() })
})

//create item Route
router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name
    })

    try {
        const newItem = await item.save()
        //res.redirect(`items/${newItem.id}`)
        res.redirect(`items`)
    } catch {
        res.render('items/new', {
            item: item,
            errorMessage: 'Error createing Item'
        })
    }
})




// const port = 3000

router.get('/', (req, res) => {
    res.send([
        {
            "name": "Tomato1",
            "description": "Tomato grown from Louisiana",
            "image": "../salmon.png"
        },
        {
            "name": "Tomato2",
            "description": "Tomato grown from Louisiana",
            "image": "../salmon.png"
        },
        {
            "name": "Tomato3",
            "description": "Tomato grown from Louisiana",
            "image": "../salmon.png"
        },
        {
            "name": "Tomato4",
            "description": "Tomato grown from Louisiana",
            "image": "../salmon.png"
        },
        {
            "name": "Tomato5",
            "description": "Tomato grown from Louisiana",
            "image": "../salmon.png"
        }
    ])
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



module.exports = router