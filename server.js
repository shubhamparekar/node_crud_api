//Importing expressjs
//EXPRESS JS for creating server and api get,post,put and delete
const express= require('express')

//Body parser for getting the data through the urls
const bodyParser=require('body-parser')

//Const app constrols the entire app with express functional constructor
//Creating app function from the express funtional constructor to use it for creating server and APIs
const app=express()


// We are saying expressjs that to use body parser url encoded to be true
//Enabling body parser with URLencoded from data to be true
app.use(bodyParser.urlencoded({extended:true}))

//Importing Mongo client
const MongoClient = require('mongodb').MongoClient

//Database connection string
const connectionString = "mongodb+srv://shubham:shubham@cluster0.f1yma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//Connection the database
MongoClient.connect(connectionString, {useUnifiedTopology:true})
    .then(client => {
        console.log('connected to database')
        const db = client.db('star-wars-quotes')
})

//Create route with creating the quotes
app.post('/quotes',(req,res)=>{
    res.send(req.body)
})

const PORT=5000

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})