const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')
const routesUrl = require('./routes/routes')

dotenv.config()

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
    }, () => console.log("Database Connected..."))

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(fileUpload())
app.use('/api', routesUrl)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT,() => console.log(`Server up and running at ${PORT}...`))