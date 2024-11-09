const { request } = require('http');
const { Product } = require('../models/Products');
const fs = require('fs').promises;
const path = require('path');
const { readJSON } = require('./ProductUtil');

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
                break;  // exit loop once product is found and modified
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

module.exports = { editProduct };