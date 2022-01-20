const express = require("express")
const app = express()
const PORT = 8080
const morgan = require('morgan')
const { db } = require('./db')
const cors = require('cors')

//express now has its own middleware that we had to install other libraries to take care of.
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./api'))

db.sync().then(() => {
  console.log('db synced')
  app.listen(PORT, () =>
    console.log(`studiously serving silly sounds on port ${PORT}`)
  )
})
