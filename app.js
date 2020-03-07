var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());

app.use('/verify',require('./routes/api'));

//Db config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
 .then(()=> console.log('MongoDb Connected...'))
 .catch(err=> console.log(err));

//middleware for error handling
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
 });
 
 app.listen(process.env.port || 4000 , function(){
     console.log('now listening for requests');
 });