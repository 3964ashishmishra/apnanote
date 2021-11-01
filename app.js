const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require('express');
const app = express();
var cors = require('cors')
app.use(express.json())
// Cors policy handle
app.use(cors())

// path of .env file
dotenv.config({path: './config.env'});

// Requiring database 
require('./db/conn')







// Requiring schemas from model
const User = require("./model/user");
const Notes = require("./model/note");


// Port Number
const PORT = process.env.PORT || 3000;


// Routing Path
app.use('/auth', require('./router/auth'))
app.use('/notes', require('./router/notes'))

// For heroku
if(process.env.NODE_ENV === "production"){
    app.use(express.static("mynotebook/build"));
}


app.listen(PORT,()=>{
    console.log(`Listening to the port number ${PORT}`);
})


// mongodb+srv://ashish:<password>@cluster0.wljbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority