// npm install chalk : color Code

const express = require('express')
const chalk = require("chalk"); // ใส่สี
const debug = require('debug')('app'); // ดูเหตุการ์ณว่ามีอะไรบ้าง
const morgan = require('morgan'); // ดู Log
const path = require('path');
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 4000

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views")
app.set("view engine", "ejs")

productRouter.route("/").get((req,res) =>{
    res.render('products',{
        products: [
            {produtsTitle: 'item1' ,Descripttion: 'ID : 1' , Price : '100'},
            {produtsTitle: 'item2' ,Descripttion: 'ID : 2' , Price : '200'},
            {produtsTitle: 'item3' ,Descripttion: 'ID : 3' , Price : '300'},
            {produtsTitle: 'item4' ,Descripttion: 'ID : 4' , Price : '400'}
        ]
    })
})

productRouter.route("/1").get((req,res) =>{
    res.send("Hello Products");
})

app.use("/products", productRouter)

app.get("/",(req,res) =>{

    res.render('index',{username: 'Wisit Phusakul', customers: ["A1","A2","A3","A4"]});

})

app.listen(PORT, ()=>{
    debug("Listening on PORT" + chalk.green(PORT));
})