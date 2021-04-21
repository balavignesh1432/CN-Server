require('dotenv').config();
const ConnectDB=require('./config/db');
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const router=require('./routes/index');

const app= express();

//Connecting to Database
ConnectDB();

//Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/",router);

app.get("/",(req,res)=>{
    res.send("Hello, World!");
});

const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server running on "+ port);
});