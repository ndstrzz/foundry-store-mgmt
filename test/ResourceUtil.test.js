const { describe, it } = require('mocha');
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs'); // Required to read the image file
const path = require('path');
const { app, server } = require('../index'); // Assuming your server is started in index.js

chai.use(chaiHttp);

let baseUrl;
let initialCount = 0;

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
            it('should return 400 if name is empty', (done) => {
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

        
            it('should return 400 if description is empty', (done) => {
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
        
            it('should return 400 if size is empty', (done) => {
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
        
            it('should return 400 if image is not uploaded', (done) => {
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
        });
    

        it('should return 400 if name is less than 2 characters', (done) => {
            chai.request(baseUrl)
                .post('/add-product')
                .field('name', 'A') // Name less than 2 characters
                .field('price', '25.00')
                .field('description', 'A valid description.')
                .field('size', 'S')
                .attach('image', fs.readFileSync(path.join(__dirname, 'test-image.jpg')), 'test-image.jpg') // Simulate file upload
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Name must be at least 2 characters long.');
                    done();
                });
        });

        it('should return 400 if price is empty', (done) => {
            chai.request(baseUrl)
                .post('/add-product')
                .field('name', 'Valid Name')
                .field('price', '') // Empty price
                .field('description', 'A valid description.')
                .field('size', 'M')
                .attach('image', fs.readFileSync(path.join(__dirname, 'test-image.jpg')), 'test-image.jpg') // Simulate file upload
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Price cannot be negative.');
                    done();
                });
        });

        it('should return 400 if price is negative', (done) => {
            chai.request(baseUrl)
                .post('/add-product')
                .field('name', 'Valid Name')
                .field('price', '-10.00') // Negative price
                .field('description', 'A valid description.')
                .field('size', 'M')
                .attach('image', fs.readFileSync(path.join(__dirname, 'test-image.jpg')), 'test-image.jpg') // Simulate file upload
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Price cannot be negative.');
                    done();
                });
        });

        it('should return 400 if description exceeds 250 words', (done) => {
            const longDescription = 'word '.repeat(251); // Exceeds 250 words
            chai.request(baseUrl)
                .post('/add-product')
                .field('name', 'Valid Name')
                .field('price', '50.00')
                .field('description', longDescription)
                .field('size', 'M')
                .attach('image', fs.readFileSync(path.join(__dirname, 'test-image.jpg')), 'test-image.jpg') // Simulate file upload
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Description must not exceed 250 words.');
                    done();
                });
        });

        it('should add a new product successfully', (done) => {
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
