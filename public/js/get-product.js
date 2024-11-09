function getProducts() {
    var response = '';
    var request = new XMLHttpRequest();
    request.open('GET', '/get-products', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function () {
        response = JSON.parse(request.responseText);
        var html = '';
        for (var i = 0; i < response.length; i++) {
            html += `
                <div class="product-card" onclick="location.href='product-details.html?id=${response[i].id}'">
                    <img src="${response[i].image}" alt="${response[i].name}" class="product-image">
                    <div class="product-details">
                        <p class="product-name">${response[i].name}</p>
                        <p class="product-price">S$ ${response[i].price}</p>
                    </div>
                </div>`;
        }
        document.querySelector('.product-grid').innerHTML = html;
    };
    request.send();
}