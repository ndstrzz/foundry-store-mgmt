const express = require('express');
const bodyParser = require("body-parser");
const multer = require('multer');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5050;
const startPage = "index.html";

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
const { addProduct, getProducts } = require('./utils/ProductUtil');

// Adjust the POST route to handle file uploads
app.post('/add-product', upload.single('image'), addProduct);
app.get('/get-products', getProducts);

// Default route
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/" + startPage);
});

// Start server
const server = app.listen(PORT, function () {
    const address = server.address();
    const baseUrl = `http://${address.address === "::" ? 'localhost' : address.address}:${address.port}`;
    console.log(`Demo project at: ${baseUrl}`);
});

module.exports = { app, server };
