//Importing expressjs
//EXPRESS JS for creating server and api get,post,put and delete
const express= require('express')

//Body parser for getting the data through the urls
const bodyParser=require('body-parser')
const { request } = require('express')

//Const app constrols the entire app with express functional constructor
const app=express()


// We are saying expressjs that to use body parser url encoded to be true
app.use(bodyParser.urlencoded({extended:true}))

//Create route with creating the quotes
app.post('/quotes',(req,res)=>{
    console.log(request)
})



app.get('/',(req,res)=>{
    res.sendFile(__dirname + './index.html')
})

const PORT=3000

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})