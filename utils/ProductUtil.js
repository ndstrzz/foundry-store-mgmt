const { request } = require('http');
const { Product } = require('../models/Products');
const fs = require('fs').promises;
const path = require('path');

async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function writeJSON(object, filename) {
    try {
        const allObjects = await readJSON(filename);
        allObjects.push(object);
        await fs.writeFile(filename, JSON.stringify(allObjects, null, 2), 'utf8');
        return allObjects;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function addProduct(req, res) {
    try {
        const name = req.body.name;
        const price = parseFloat(req.body.price).toFixed(2);
        const description = req.body.description;
        const size = req.body.size;
        const image = req.file ? `images/${req.file.filename}` : null;

        // validation checks
        if (!name) return res.status(400).json({ message: 'Name is required' });
        if (!price || isNaN(price) || price <= 0) return res.status(400).json({ message: 'Invalid price' });
        if (!description || description.split(" ").length > 250) return res.status(400).json({ message: 'Description must be 250 words or fewer' });
        if (!size || size.split(" ").length > 50) return res.status(400).json({ message: 'Size must be 50 words or fewer' });
        if (!image) return res.status(400).json({ message: 'Image is required' });

        // creating new product which includes unique id
        const newProduct = new Product(name, price, description, size);
        newProduct.image = image; // image path set for product

        // saving new product to products.json
        const updatedProducts = await writeJSON(newProduct, path.join(__dirname, 'products.json'));
        console.log("Product added successfully:", newProduct);

        return res.status(201).json({ success: true, message: 'Product added successfully' });
    } catch (error) {
        console.error("Error in addProduct:", error);
        return res.status(500).json({ message: error.message });
    }
}


module.exports = {
    readJSON,
    writeJSON,
    addProduct,
};
