require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cokieParser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cokieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))


//routes

app.use('/user', require('./routes/userRouter'))



// connection to mongDB
const URL = process.env.MONGDB_URL
mongoose.connect(URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB')
})





const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port', PORT)

})