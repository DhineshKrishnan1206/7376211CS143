const express= require('express')
const cors=require('cors')
const port=8000
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')
function connectDB(){
    try {
        mongoose.connect("mongodb+srv://user:user@ecom.z4vx92d.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=ecom")
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
        console.log("Failed to DB")
    }
}

const app=express()
connectDB()
app.use(cors())
app.use(express.json())
app.use('/',productRoutes)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})