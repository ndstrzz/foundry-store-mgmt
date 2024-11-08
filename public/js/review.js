// Get productId from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Set the back button link to point back to the product details page
document.getElementById('backButton').href = `product-details.html?id=${productId}`;

// Function to get and display reviews
function getReviews() {
    const request = new XMLHttpRequest();
    request.open('GET', `/api/reviews/${productId}`, true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        if (request.status === 200) {
            const reviews = JSON.parse(request.responseText);
            const reviewsContainer = document.getElementById('reviewsContainer');
            reviewsContainer.innerHTML = ""; // Clear any existing reviews

            reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.classList.add('review');
                reviewElement.innerText = review.review;
                reviewsContainer.appendChild(reviewElement);
            });
        } else {
            console.error('Error fetching reviews:', request.statusText);
        }
    };

    request.onerror = function () {
        console.error('Network error while fetching reviews.');
    };

    request.send();
}

// Handle form submission to post a new review
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let reviewText = document.getElementById('reviewText').value;

    // Trim whitespace from both ends and remove empty lines
    reviewText = reviewText
        .split('\n')                      // Split into lines
        .map(line => line.trim())          // Trim each line
        .filter(line => line !== '')       // Remove empty lines
        .join('\n');                       // Join lines back

    // Check if the review text is empty after cleanup
    if (reviewText === '') {
        alert('Your review cannot be empty or contain only spaces.');
        return;
    }

    // Proceed with submission if validation passes
    const request = new XMLHttpRequest();
    request.open('POST', `/api/reviews/${productId}`, true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        if (request.status === 201) {
            document.getElementById('reviewText').value = ''; // Clear form
            getReviews(); // Refresh reviews
            alert('Your review has been submitted successfully!');
        } else {
            console.error('Error posting review:', request.statusText);
        }
    };

    request.onerror = function () {
        console.error('Network error while posting review.');
    };

    // Send the cleaned-up review text
    request.send(JSON.stringify({ review: reviewText }));
});



// Initialize by getting reviews only
getReviews();
