const fs = require('fs');
const path = require('path');
const Review = require('../models/Reviews');

const REVIEW_FILE_PATH = path.join(__dirname, 'review.json');

// helper function used to load all reviews
function getAllReviews() {
    try {
        const data = fs.readFileSync(REVIEW_FILE_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading reviews from file:", error);
        return [];
    }
}

// retrieve reviews by product id
function getReviewsByProductId(productId) {
    const reviews = getAllReviews();
    return reviews.filter(review => review.productId === productId);
}

// saving new review to review.json
function saveReview(review) {
    try {
        const reviews = getAllReviews();
        reviews.push(review);
        fs.writeFileSync(REVIEW_FILE_PATH, JSON.stringify(reviews, null, 2));
    } catch (error) {
        console.error("Error saving review:", error);
    }
}

module.exports = {
    getAllReviews,
    getReviewsByProductId,
    saveReview
};
