// npm install chalk : color Code

const express = require("express");
const chalk = require("chalk"); // ใส่สี
const debug = require("debug")("app"); // ดูเหตุการ์ณว่ามีอะไรบ้าง
const morgan = require("morgan"); // ดู Log
const path = require("path");
const products = require("./data/products.json");

const app = express();
const PORT = process.env.PORT || 4000;

const productsRouter = require("./src/router/productsRouter");
const { count } = require("console");

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/contact", (req, res) => {
  res.render("contact"); // แสดงหน้า contact.ejs
});

app.get("/Oldindex", (req, res) => {
  res.render("Oldindex"); // แสดงหน้า contact.ejs
});

app.listen(PORT, () => {
  debug("Listening on PORT" + chalk.green(PORT));
});
