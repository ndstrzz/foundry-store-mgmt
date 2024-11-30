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
        const price = req.body.price;
        const description = req.body.description;
        const size = req.body.size;
        const image = req.file ? `images/${req.file.filename}` : null;

        // Validation checks

        if (!name) {
            return res.status(400).json({ message: 'Name is required.' });
          }
          
        if (!name || !price || !description || !size || !image) {
            return res.status(400).json({ message: 'Please fill in all the fields.' });
        }

        if (name.length < 2) {
            return res.status(400).json({ message: 'Name must be at least 2 characters long.' });
        }

        if (price < 0) {
            return res.status(400).json({ message: 'Price cannot be negative.' });
        }
        if (description.split(' ').length > 250) {
            return res.status(400).json({ message: 'Description must not exceed 250 words.' });
        }

        // Create new product
        const newProduct = new Product(name, parseFloat(price).toFixed(2), description, size);
        newProduct.image = image;

        // Save to products.json
        const updatedProducts = await writeJSON(newProduct, path.join(__dirname, 'products.json'));
        console.log('Product added successfully:', newProduct);

        return res.status(201).json({ success: true, message: 'Product added successfully.' });
    } catch (error) {
        console.error('Error in addProduct:', error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    readJSON,
    writeJSON,
    addProduct,
};
