// Util/ReviewUtil.js

const fs = require('fs');
const path = require('path');

class Review {
    constructor(reviewId, productId, review) {
        this.reviewId = reviewId;
        this.productId = productId;
        this.review = review;
    }

    // Method to load all reviews from review.json
    static getAllReviews() {
        const data = fs.readFileSync(path.join(__dirname, 'review.json'));
        return JSON.parse(data);
    }

    // Method to get reviews by productId
    static getReviewsByProductId(productId) {
        const reviews = this.getAllReviews();
        return reviews.filter(review => review.productId === productId);
    }

    // Method to save a new review
    save() {
        const reviews = Review.getAllReviews();
        reviews.push(this);

        fs.writeFileSync(
            path.join(__dirname, 'review.json'),
            JSON.stringify(reviews, null, 2)
        );
    }
}

module.exports = Review;
