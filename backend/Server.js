const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./Routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, ()=> console.log("database connected"))


app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(4000, ()=>console.log("app is up and running"));


// Basiratu1