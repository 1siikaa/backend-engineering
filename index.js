const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')
const route = require('./src/route/route.js')


const app = express()

app.use(multer().any())

mongoose.connect('mongodb+srv://Vashika:Vanshikaa08@cluster0.on6mcgr.mongodb.net/test')
.then(()=>console.log("mongodb is connected successfully"))
.catch((err)=>console.log(err.message))

app.use('/', route)

app.listen(3000, function(){
    console.log("Express app is running on port " + 3000)
})



























