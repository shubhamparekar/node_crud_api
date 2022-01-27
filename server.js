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
        console.log('connected to database server')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')
        
        //1. Create with POST
        //Create route with creating the quotes
        // Two parameters first one is route, second is function which you want to execute
        app.post('/quotes',(req,res)=>{
            //inserting the document
                quotesCollection.insertOne(req.body)
                //Post inserting getting the results
            .then(result => {
                console.log(result)
            })
            //Error for document
            .catch(error => console.log(error))
        })

        // 2. Reading data from the DB
        app.get('/getall', (req, res) => {
            //Collecting the collection quotes from DB and changing them from objects of objects into array of objects form
            db.collection('quotes').find().toArray()
            //Waiting for the promise to send the data back
            .then(result => {
                res.send(result)
            })
            //Waiting for the promise to send the error back
            .catch(error => consolelog(error))
        })

}).catch(console.error)//MongoDB Altas Cluster/Server connection error

const PORT=5000

app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})