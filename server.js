require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cokieParser = require('cookie-parser')


const app = express
app.use(express.json())
app.use(cokieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

// connection to monodb
const URL