// get product id from url
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// back button link to go back to product details page
document.getElementById('backButton').href = `product-details.html?id=${productId}`;

// function to get and display reviews
function getReviews() {
    const request = new XMLHttpRequest();
    request.open('GET', `/api/reviews/${productId}`, true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        if (request.status === 200) {
            const reviews = JSON.parse(request.responseText);
            const reviewsContainer = document.getElementById('reviewsContainer');
            reviewsContainer.innerHTML = ""; // clear input form for reviews

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

// allow posting of new review
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let reviewText = document.getElementById('reviewText').value;

    // trim whitespace from both ends and remove empty lines
    reviewText = reviewText
        .split('\n')                      // split into lines
        .map(line => line.trim())          // trim each line
        .filter(line => line !== '')       // remove empty lines
        .join('\n');                       // join lines back

    // check if review text is empty after cleanup
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
            document.getElementById('reviewText').value = ''; // clear form
            getReviews(); // refresh reviews
            alert('Your review has been submitted successfully!');
        } else {
            console.error('Error posting review:', request.statusText);
        }
    };

    request.onerror = function () {
        console.error('Network error while posting review.');
    };

    // send cleaned-up review text
    request.send(JSON.stringify({ review: reviewText }));
});


// display reviews on page load
getReviews();
