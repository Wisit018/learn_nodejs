// npm install chalk : color Code

const express = require('express')
const chalk = require("chalk"); // ใส่สี
const debug = require('debug')('app'); // ดูเหตุการ์ณว่ามีอะไรบ้าง
const morgan = require('morgan'); // ดู Log
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/",(req,res) =>{

    res.send("hello World ");

})

app.listen(port, ()=>{
    debug("Listening on port" + chalk.green(port));
})