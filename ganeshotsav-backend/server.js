const express = require('express')
const cors = require('cors');
const http = require('http');
const mongoose = require('mongoose');
require('dotenv').config();
const donorRoutes = require('./routes/donorRoutes')

const app =  express();
app.use(express.json());
app.use(cors());

const PORT = process.env.API_PORT || 5002;

app.use("/donation",donorRoutes);

const server = http.createServer(app);
server.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
});



mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected")
}).catch(err => {
    console.log("Not Connected",err.message);
})