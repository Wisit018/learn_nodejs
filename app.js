// npm install chalk : color Code

const express = require('express')
const chalk = require("chalk"); // ใส่สี
const debug = require('debug')('app'); // ดูเหตุการ์ณว่ามีอะไรบ้าง
const morgan = require('morgan'); // ดู Log
const path = require('path');


const app = express();
const PORT = process.env.PORT || 4000
const productsRouter =require("./src/router/productsRouter")

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views")
app.set("view engine", "ejs")


app.use("/products", productsRouter)

app.get("/",(req,res) =>{

    res.render('index',{username: 'Wisit Phusakul', customers: ["A1","A2","A3","A4"]});

})

app.listen(PORT, ()=>{
    debug("Listening on PORT" + chalk.green(PORT));
})