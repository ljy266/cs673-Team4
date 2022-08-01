if (process.env.NODE_ENV !== 'production') {
       require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const cors = require('cors');

const indexRouter = require('./routes/index')
const itemRouter = require('./routes/items')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
       useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

const corsOptions = {
       origin: (origin, callback) => {
              callback(null, true);
       },
       methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
       allowedHeaders: ["Access-Control-Allow-Origin", "Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
       credentials: true
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));


app.use('/', indexRouter)
app.use('/items', itemRouter)

app.listen(process.env.PORT || 3000)



// const express = require('express')
// const app = express()
// const port = 3000
// const cors = require('cors');

// const corsOptions = {
//   origin: (origin, callback) => {
//     callback(null, true);
//   },
//   methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//   allowedHeaders: ["Access-Control-Allow-Origin", "Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
//   credentials: true
// };

// app.options('*', cors(corsOptions));
// app.use(cors(corsOptions));


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

