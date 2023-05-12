require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const path = require('path')

const connectDB = require('./database/connect')

const uploadRouter = require('./routes/upload')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.use('/', uploadRouter)

const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI)
    console.log(`Connected to DB...`)
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
