const mongoose = require("mongoose");
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

mongoose.connect(connectionString).then(()=> console.log("Connected to the db")).catch((err)=>{
    console.log(err)})