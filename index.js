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

// Import functions from ProductUtil.js and ReviewUtil.js
const { addProduct, getProducts, readJSON } = require('./utils/ProductUtil');
const Review = require('./utils/ReviewUtil');

// Product routes
app.post('/add-product', upload.single('image'), addProduct);
app.get('/get-products', getProducts);

// Endpoint to get individual product details by ID
app.get('/get-product', async (req, res) => {
    const productId = req.query.id;
    try {
        const products = await readJSON('utils/products.json');
        const product = products.find(p => p.id === productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Review routes

// GET route to fetch all reviews for a specific product
app.get('/api/reviews/:productId', (req, res) => {
    const productId = parseInt(req.params.productId);
    const productReviews = Review.getReviewsByProductId(productId);
    res.json(productReviews);
});

// POST route to add a new review for a specific product
app.post('/api/reviews/:productId', (req, res) => {
    const productId = parseInt(req.params.productId);
    const newReview = new Review(
        Date.now(), // Use current timestamp as a unique ID
        productId,
        req.body.review
    );

    newReview.save();
    res.status(201).json(newReview);
});

// Default route to serve the homepage
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
