const { describe, it } = require('mocha');
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs'); // Required to read the image file
const path = require('path');
const { app, server } = require('../index'); // Assuming your server is started in index.js

chai.use(chaiHttp);

let baseUrl;

describe('Product API', () => {
    before(async () => {
        const { address, port } = server.address();
        baseUrl = `http://${address === '::' ? 'localhost' : address}:${port}`;
    });

    after(() => {
        return new Promise((resolve) => {
            server.close(() => {
                resolve();
            });
        });
    });

    describe('POST /add-product', () => {
        it('when the product name field is empty, error message will be sent', (done) => {
            chai.request(baseUrl)
                .post('/add-product')
                .field('name', '') // Empty name
                .field('price', '50.00')
                .field('description', 'A valid description.')
                .field('size', 'L')
                .attach('image', fs.readFileSync(path.join(__dirname, 'test-image.jpg')), 'test-image.jpg')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Name is required.');
                    done();
                });
        });

        it('when the product name field is less than 2 characters, error message will be sent', (done) => {
            chai.request(baseUrl)
                .post('/add-product')
                .field('name', 'A')  // Name with only 1 character
                .field('price', '50.00')
                .field('description', 'A valid description.')
                .field('size', 'L')
                .attach('image', fs.readFileSync(path.join(__dirname, 'test-image.jpg')), 'test-image.jpg') // Simulate file upload
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Name must be at least 2 characters long.');
                    done();
                });
        });


        it('when the description field is empty, error message will be sent', (done) => {
            chai.request(baseUrl)
                .post('/add-product')
                .field('name', 'Valid Name')
                .field('price', '50.00')
                .field('description', '') // Empty description
                .field('size', 'L')
                .attach('image', fs.readFileSync(path.join(__dirname, 'test-image.jpg')), 'test-image.jpg')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Description is required.');
                    done();
                });
        });

        it('when description field exceeds 250 words, error message will be sent ', (done) => {
            const longDescription = 'word '.repeat(251); // Generate 251 words

            chai.request(baseUrl)
                .post('/add-product')
                .field('name', 'Valid Name')
                .field('price', '50.00')
                .field('description', longDescription)  // Description with more than 250 words
                .field('size', 'L')
                .attach('image', fs.readFileSync(path.join(__dirname, 'test-image.jpg')), 'test-image.jpg') // Simulate file upload
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Description must not exceed 250 words.');
                    done();
                });
        });
        

        it('when size field is empty, error message will be sent', (done) => {
            chai.request(baseUrl)
                .post('/add-product')
                .field('name', 'Valid Name')
                .field('price', '50.00')
                .field('description', 'A valid description.')
                .field('size', '') // Empty size
                .attach('image', fs.readFileSync(path.join(__dirname, 'test-image.jpg')), 'test-image.jpg')
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Size & Fit information is required.');
                    done();
                });
        });

        it('when image field is empty, error message will be sent', (done) => {
            chai.request(baseUrl)
                .post('/add-product')
                .field('name', 'Valid Name')
                .field('price', '50.00')
                .field('description', 'A valid description.')
                .field('size', 'L')
                // No image uploaded
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Image is required.');
                    done();
                });
        });

        it('when price field is empty, error message will be sent', (done) => {
            chai.request(baseUrl)
                .post('/add-product')
                .field('name', 'Valid Name')
                .field('price', '') // Empty price
                .field('description', 'A valid description.')
                .field('size', 'M')
                .attach('image', fs.readFileSync(path.join(__dirname, 'test-image.jpg')), 'test-image.jpg') // Simulate file upload
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Price is required.');
                    done();
                });
        });
        
        it('when price field is a negative number, error message will be sent', (done) => {
            chai.request(baseUrl)
                .post('/add-product')
                .field('name', 'Valid Name')
                .field('price', '-10') // Negative Price Number
                .field('description', 'A valid description.')
                .field('size', 'M')
                .attach('image', fs.readFileSync(path.join(__dirname, 'test-image.jpg')), 'test-image.jpg') // Simulate file upload
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Price cannot be negative.');
                    done();
                });
        });

        it('Adding a new product successfully', (done) => {
            chai.request(baseUrl)
                .post('/add-product')
                .field('name', 'Test Product')
                .field('price', '100.00')
                .field('description', 'This is a valid product description.')
                .field('size', 'L')
                .attach('image', fs.readFileSync(path.join(__dirname, 'test-image.jpg')), 'test-image.jpg') // Simulate file upload
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body.message).to.equal('Product added successfully.');
                    done();
                });
        });

        
    });
});
