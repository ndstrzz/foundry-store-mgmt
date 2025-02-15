const { Product } = require('../models/Products');
const fs = require('fs').promises;
const path = require('path');

async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return JSON.parse(data);
    } catch (err) {
    }
}

async function writeJSON(object, filename) {
    try {
        const allObjects = await readJSON(filename);
        allObjects.push(object);
        await fs.writeFile(filename, JSON.stringify(allObjects, null, 2), 'utf8');
        return allObjects;
    } catch (err) {
    }
}

async function addProduct(req, res) {
    try {
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const size = req.body.size;
        const image = req.file ? `images/${req.file.filename}` : null;

        // Specific validation checks
        if (!name) {
            return res.status(400).json({ message: 'Name is required.' });
        }
        if (name.length < 2) {
            return res.status(400).json({ message: 'Name must be at least 2 characters long.' });
        }
        if (!price) {
            return res.status(400).json({ message: 'Price is required.' });
        }
        if (price < 0) {
            return res.status(400).json({ message: 'Price cannot be negative.' });
        }
        if (!description) {
            return res.status(400).json({ message: 'Description is required.' });
        }
        if (description.split(' ').length > 250) {
            return res.status(400).json({ message: 'Description must not exceed 250 words.' });
        }
        if (!size) {
            return res.status(400).json({ message: 'Size & Fit information is required.' });
        }
        if (!image) {
            return res.status(400).json({ message: 'Image is required.' });
        }

        // Create new product
        const newProduct = new Product(name, parseFloat(price).toFixed(2), description, size);
        newProduct.image = image;

        // Save to products.json
        const updatedProducts = await writeJSON(newProduct, path.join(__dirname, 'products.json'));
        console.log('Product added successfully:', newProduct);

        return res.status(201).json({ success: true, message: 'Product added successfully.' });
    } catch (error) {
       
    }
}

module.exports = {
    readJSON,
    writeJSON,
    addProduct,
};
