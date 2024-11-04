function getProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        var request = new XMLHttpRequest();
        request.open('GET', `/get-product?id=${productId}`, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.onload = function () {
            const product = JSON.parse(request.responseText);
            if (product) {
                document.getElementById('productDetails').innerHTML = `
                    <div class="product-detail-left">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                    </div>
                    <div class="product-detail-right">
                        <h1>${product.name} <a href="edit-product.html?id=${product.id}"><img src="images/edit-icon.png" alt="Edit" class="edit-icon"></a></h1>
                        <p class="product-price">S$ ${product.price}</p>
                        <hr>
                        <h3>Description</h3>
                        <p>${product.description}</p>
                        <hr>
                        <h3>Size & Fit</h3>
                        <p>${product.size}</p>
                        <a href="edit-review.html?id=${product.id}" class="review-link">Review</a>
                        <div class="product-actions">
                            <button class="add-to-cart-btn">Add to cart</button>
                            <button class="checkout-btn">Checkout</button>
                        </div>
                    </div>
                `;
            } else {
                document.getElementById('productDetails').innerHTML = `<p>Product not found.</p>`;
            }
        };
        request.onerror = function () {
            document.getElementById('productDetails').innerHTML = `<p>Error loading product details.</p>`;
        };
        request.send();
    } else {
        document.getElementById('productDetails').innerHTML = `<p>Invalid product ID.</p>`;
    }
}
