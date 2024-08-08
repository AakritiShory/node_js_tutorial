const mongoose=require('mongoose');
//defining mongodb connection
const mongoURL='mongodb://localhost:27017/food'

//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

//get default connection
//mongoose maintains a default connection object 
//representing the mongo db connection.
const db=mongoose.connection;

//define event listeners for database connection

db.on('connected',()=>{
    console.log('Connected to MongoDB server');

});

db.on('error',()=>{
    console.log(' MongoDB connection error');

});

db.on('disconnected',()=>{
    console.log(' MongoDB disconnected');

});

//export database connection
module.exports=db;



