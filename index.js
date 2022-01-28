require('dotenv').config()
// I installed express and defined endpoint
const express = require('express')
const app = express()
const endpoint = require('./routes/api')

app.use(express.json())
app.use('/api',endpoint)

app.listen(process.env.PORT,(req,res)=>{
    console.log('server is running')
    
})