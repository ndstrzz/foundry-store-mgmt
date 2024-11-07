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

        // Validation checks
        if (!name) return res.status(400).json({ message: 'Name is required' });
        if (!price || isNaN(price) || price <= 0) return res.status(400).json({ message: 'Invalid price' });
        if (!description || description.split(" ").length > 250) return res.status(400).json({ message: 'Description must be 250 words or fewer' });
        if (!size || size.split(" ").length > 50) return res.status(400).json({ message: 'Size must be 50 words or fewer' });
        if (!image) return res.status(400).json({ message: 'Image is required' });

        // Create a new product instance, which includes a unique ID
        const newProduct = new Product(name, price, description, size);
        newProduct.image = image; // Set the image path for the product

        // Save the new product to products.json
        const updatedProducts = await writeJSON(newProduct, path.join(__dirname, 'products.json'));
        console.log("Product added successfully:", newProduct);

        return res.status(201).json({ success: true, message: 'Product added successfully' });
    } catch (error) {
        console.error("Error in addProduct:", error);
        return res.status(500).json({ message: error.message });
    }
}

async function getProducts(req, res) {
    try {
        const allProducts = await readJSON(path.join(__dirname, 'products.json'));
        return res.status(200).json(allProducts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}




async function editProduct(req, res) {
    try {
        const id = req.params.id;
        console.log(req);
        const { name, price, description, size, image } = req.body;

        const allResources = await readJSON('utils/products.json');

        let modified = false;
        for (let i = 0; i < allResources.length; i++) {
            let currentProduct = allResources[i];
            if (currentProduct.id === id) {
                console.log(req.body);
                currentProduct.name = name;
                currentProduct.price = price;
                currentProduct.description = description;
                currentProduct.size = size;
                currentProduct.image = req.file ? `images/${req.file.filename}` : allResources[i].image;
                modified = true;
                break;  // Exit the loop once the product is found and modified
            }
        }
        
        
        if (modified) {
            await fs.writeFile('utils/products.json', JSON.stringify(allResources), 'utf8');
            return res.status(200).json({ message: 'Resource modified successfully!' });
        } else {
            return res.status(404).json({ message: 'Resource not found!' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}








module.exports = {
    readJSON,
    writeJSON,
    addProduct,
    getProducts,
    editProduct
};
