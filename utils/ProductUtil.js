<<<<<<< HEAD
const { Product } = require('../models/Products')
const fs = require('fs').promises;
=======
const { Product } = require('../models/Products');
const fs = require('fs').promises;
const path = require('path');
>>>>>>> a1da2ae (Initial commit with upload and homepage files)

async function readJSON(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return JSON.parse(data);
<<<<<<< HEAD
    } catch (err) {console.error(err); throw err; }
=======
    } catch (err) {
        console.error(err);
        throw err;
    }
>>>>>>> a1da2ae (Initial commit with upload and homepage files)
}

async function writeJSON(object, filename) {
    try {
        const allObjects = await readJSON(filename);
        allObjects.push(object);
        // Pretty-print JSON with 2 spaces for indentation
        await fs.writeFile(filename, JSON.stringify(allObjects, null, 2), 'utf8');
        return allObjects;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

<<<<<<< HEAD

async function addProduct(req, res) {
    try {
        const name = req.body.name;
        const price = parseFloat(req.body.price).toFixed(2); // Formats price to two decimal places
        const description = req.body.description;
        const size = req.body.size;

        // Validation checks
        if (!name) {
=======
async function addProduct(req, res) {
    try {
        console.log("Request Body:", req.body);  // Log text fields
        console.log("Uploaded File:", req.file);  // Log file details

        const name = req.body.name;
        const price = parseFloat(req.body.price).toFixed(2);
        const description = req.body.description;
        const size = req.body.size;
        const image = req.file ? req.file.filename : null;  // Check if image file exists

        // Validation checks
        if (!name) {
            console.log("Validation Error: Name is required");
>>>>>>> a1da2ae (Initial commit with upload and homepage files)
            return res.status(400).json({ message: 'Name is required' });
        }
        
        if (!price || isNaN(price) || price <= 0) {
<<<<<<< HEAD
            return res.status(400).json({ message: 'Price must be a positive number and formatted to two decimal places' });
        }
        
        if (description && description.split(" ").length > 250) {
            return res.status(400).json({ message: 'Description must be 250 words or fewer' });
        }

        if (size && size.split(" ").length > 50) {
            return res.status(400).json({ message: 'Size must be 50 words or fewer' });
        }

        const newProduct = new Product(name, price, description, size);
        const updatedProducts = await writeJSON(newProduct, 'utils/products.json');
        return res.status(201).json(updatedProducts);
    } catch (error) {
=======
            console.log("Validation Error: Invalid price");
            return res.status(400).json({ message: 'Price must be a positive number and formatted to two decimal places' });
        }

        if (!description || description.split(" ").length > 250) {
            console.log("Validation Error: Description too long or missing");
            return res.status(400).json({ message: 'Description must be 250 words or fewer' });
        }

        if (!size || size.split(" ").length > 50) {
            console.log("Validation Error: Size too long or missing");
            return res.status(400).json({ message: 'Size must be 50 words or fewer' });
        }

        if (!image) {
            console.log("Validation Error: Image is required");
            return res.status(400).json({ message: 'Image is required' });
        }

        // Construct new product and save
        const newProduct = {
            name,
            price,
            description,
            size,
            image: `images/${image}`  // Path to access the image in the public folder
        };

        const updatedProducts = await writeJSON(newProduct, path.join(__dirname, 'products.json'));
        console.log("Product added successfully:", newProduct);
        return res.status(201).json({ success: true, message: 'Product added successfully' });
    } catch (error) {
        console.error("Error in addProduct:", error);
>>>>>>> a1da2ae (Initial commit with upload and homepage files)
        return res.status(500).json({ message: error.message });
    }
}

<<<<<<< HEAD

=======
>>>>>>> a1da2ae (Initial commit with upload and homepage files)
module.exports = {
    readJSON,
    writeJSON,
    addProduct
<<<<<<< HEAD
}
=======
};
>>>>>>> a1da2ae (Initial commit with upload and homepage files)
