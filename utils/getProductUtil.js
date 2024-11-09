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

async function getProducts(req, res) {
    try {
        const allProducts = await readJSON(path.join(__dirname, 'products.json'));
        return res.status(200).json(allProducts);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProducts,
};
