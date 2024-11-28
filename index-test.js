const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 5050;
const startPage = "index.html";

// Ensure `public/images` directory exists
if (!fs.existsSync('public/images')) {
    fs.mkdirSync('public/images', { recursive: true });
}

// Configure multer storage for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // Save files to `public/images`
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
    }
});
const upload = multer({ storage: storage });

// Set up body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./instrumented")); // Serve static files

// Import utility functions
const { addProduct, readJSON } = require('./utils/ProductUtil');
const { getProducts } = require('./utils/getProductUtil');
const { getAllReviews, getReviewsByProductId, saveReview } = require('./utils/ReviewUtil');
const { editProduct } = require('./utils/editProductUtil');

// Product routes
app.post('/add-product', upload.single('image'), (req, res) => {
    console.log('Uploaded File:', req.file);
    console.log('Request Body:', req.body);
    addProduct(req, res);
});
app.get('/get-products', getProducts);
app.put('/edit-product/:id', upload.single('image'), editProduct);

// Endpoint to get individual product details by id
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

// Default route for homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/instrumented/" + startPage);
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
    console.error('Failed to start server:', err);
});

module.exports = { app, server };
