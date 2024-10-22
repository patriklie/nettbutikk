const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const register = require('./routes/register')
const login = require('./routes/login')


const products = require('./products');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.DB_URI;

app.use(express.json());
app.use(cors());
app.use("/api/register", register);
app.use("/api/login", login);

app.get("/", (req, res) => {
    res.send("Welcome to our online shop API...");
})

app.get("/products", (req, res) => {
    res.send(products);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

mongoose.connect(uri)
    .then(() => console.log("MongoDb connection successfull..."))
    .catch((error) => console.log("MongoDb connection failed with error: ", error));