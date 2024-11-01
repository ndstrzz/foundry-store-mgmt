function addProduct() {
    var jsonData = {
        name: document.getElementById("name").value,
        price: parseFloat(document.getElementById("price").value).toFixed(2),
        description: document.getElementById("description").value,
        size: document.getElementById("size").value
    };

    if (!jsonData.name || !jsonData.price || !jsonData.description || !jsonData.size) {
        var messageElement = document.getElementById("message");
        if (messageElement) {
            messageElement.innerHTML = 'All fields are required!';
            messageElement.setAttribute("class", "text-danger");
        }
        return;
    }

    var request = new XMLHttpRequest();
    request.open("POST", "/add-product", true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function () {
        var response = JSON.parse(request.responseText);
        var messageElement = document.getElementById("message");

        if (response.message === undefined && messageElement) {
            messageElement.innerHTML = 'Added Product: ' + jsonData.name + '!';
            messageElement.setAttribute("class", "text-success");

            // Clear input fields
            document.getElementById("name").value = "";
            document.getElementById("price").value = "";
            document.getElementById("description").value = "";
            document.getElementById("size").value = "";
        } else if (messageElement) {
            messageElement.innerHTML = 'Unable to add product!';
            messageElement.setAttribute("class", "text-danger");
        }
    };

    request.send(JSON.stringify(jsonData));
}
