// store products globally
let products = [];

function getProducts() {
    var request = new XMLHttpRequest();
    request.open('GET', '/get-products', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function () {
        products = JSON.parse(request.responseText);
        displayProducts(products); // display all products
    };
    request.send();
}

function displayProducts(productList) {
    let html = '';
    productList.forEach(product => {
        html += `
            <div class="product-card" onclick="location.href='product-details.html?id=${product.id}'">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-details">
                    <p class="product-name">${product.name}</p>
                    <p class="product-price">S$ ${product.price}</p>
                </div>
            </div>`;
    });
    document.querySelector('.product-grid').innerHTML = html;
}

function searchProducts(query) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // clear previous results

    if (query.trim() === '') {
        searchResults.style.display = 'none'; // if query is empty, hide results
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredProducts.length > 0) {
        searchResults.style.display = 'block';
        filteredProducts.forEach(product => {
            searchResults.innerHTML += `
                <div class="search-result-item" onclick="location.href='product-details.html?id=${product.id}'">
                    <img src="${product.image}" alt="${product.name}" class="result-image">
                    <span class="result-name">${product.name}</span>
                </div>`;
        });
    } else {
        searchResults.style.display = 'none';
    }
}