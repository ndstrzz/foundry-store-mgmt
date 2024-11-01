
var express = require('express');
var bodyParser = require("body-parser");
var app = express();

const PORT = process.env.PORT || 5050
var startPage = "index.html";


const express = require('express');
const bodyParser = require("body-parser");
const multer = require('multer');
const path = require('path');
const app = express();


// Configure multer storage for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
    }
});
const upload = multer({ storage: storage });

// Set up body parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));

// Import addProduct function
const { addProduct } = require('./utils/ProductUtil');
app.post('/add-product', addProduct);

app.get('/', (req, res) => {
res.sendFile(__dirname + "/public/" + startPage);
})

server = app.listen(PORT, function () {
    const address = server.address();
    const baseUrl = `http://${address.address == "::" ? 'localhost' :
address.address}:${address.port}`;
    console.log(`Demo project at: ${baseUrl}`);
});

module.exports = {app, server}

// Import addProduct function
const { addProduct } = require('./utils/ProductUtil');

// Adjust the POST route to handle file uploads
app.post('/add-product', upload.single('image'), addProduct);

// Default route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/upload.html");
});

// Start server
server = app.listen(PORT, function () {
    const address = server.address();
    const baseUrl = `http://${address.address === "::" ? 'localhost' : address.address}:${address.port}`;
    console.log(`Demo project at: ${baseUrl}`);
});

module.exports = { app, server };
