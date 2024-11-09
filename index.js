const express = require('express');
const bodyParser = require("body-parser");
const multer = require('multer');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5050;
const startPage = "index.html";

// configure multer storage for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // ensuring this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // generate unique filename
    }
});
const upload = multer({ storage: storage });

// setting up body parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));

// import functions from ProductUtil.js, getProductUtil.js, ReviewUtil.js, and editProductUtil.js
const { addProduct, readJSON } = require('./utils/ProductUtil');
const { getProducts } = require('./utils/getProductUtil');
const { getAllReviews, getReviewsByProductId, saveReview } = require('./utils/ReviewUtil');
const { editProduct } = require('./utils/editProductUtil');

// product routes
app.post('/add-product', upload.single('image'), addProduct);
app.get('/get-products', getProducts);
app.put('/edit-product/:id', upload.single('image'), editProduct);

// endpoint to get individual product details by id
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

// GET route to fetch all reviews for specific product
app.get('/api/reviews/:productId', (req, res) => {
    const productId = parseInt(req.params.productId);
    try {
        const productReviews = getReviewsByProductId(productId);
        res.json(productReviews);
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// POST route to add new review for specific product
app.post('/api/reviews/:productId', (req, res) => {
    const productId = parseInt(req.params.productId);
    const newReview = {
        reviewId: Date.now(),
        productId: productId,
        review: req.body.review
    };

    try {
        saveReview(newReview);
        res.status(201).json(newReview);
    } catch (error) {
        console.error("Error saving review:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// default route for homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/" + startPage);
});

// starting server (node index.js)
const server = app.listen(PORT, function () {
    const address = server.address();
    const baseUrl = `http://${address.address === "::" ? 'localhost' : address.address}:${address.port}`;
    console.log(`Demo project at: ${baseUrl}`);
});

module.exports = { app, server };
