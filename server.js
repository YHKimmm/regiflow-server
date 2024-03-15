require('dotenv').config()

const express = require('express');
const path = require("path");


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'dist/index.html'))
);