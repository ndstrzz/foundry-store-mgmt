function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const imagePreview = document.getElementById('image-preview');
        imagePreview.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}


function getDataFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    // You can build the full `data` object here or use `id` directly.
    return id;
}

function loaded() {
    const id = getDataFromURL();
    getProduct(id);
}

function getProduct(id) {
    var request = new XMLHttpRequest();
    request.open('GET', `/get-product?id=${id}`, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = function () {
        const product = JSON.parse(request.responseText);
        if (product) {
            document.getElementById("editName").value = product.name;
            document.getElementById("editPrice").value = parseFloat(product.price).toFixed(2);
            document.getElementById("editDescription").value = product.description;
            document.getElementById("editSize").value = product.size;
            document.getElementById("image-preview").src = product.image;
        } else {
            document.getElementById('productDetails').innerHTML = `<p>Product not found.</p>`;
        }
    };
    request.onerror = function () {
        document.getElementById('productDetails').innerHTML = `<p>Error loading product details.</p>`;
    };
    request.send();
}

function updateProduct() {
    const id = getDataFromURL();
    console.log(id);


    // Select the image file
    const imageFile = document.getElementById("image-upload").files[0];


    // Check for required fields
    if (!document.getElementById("editName").value ||
        !document.getElementById("editPrice").value ||
        !document.getElementById("editDescription").value ||
        !document.getElementById("editSize").value) {

        document.getElementById("editMessage").innerHTML = 'All fields are required!';
        document.getElementById("editMessage").setAttribute("class", "text-danger");
        return;
    }


    // Create FormData and append fields
    const formData = new FormData();
    formData.append("name", document.getElementById("editName").value);
    formData.append("price", parseFloat(document.getElementById("editPrice").value).toFixed(2));
    formData.append("description", document.getElementById("editDescription").value);
    formData.append("size", document.getElementById("editSize").value);
    if (imageFile) {
        formData.append("image", imageFile);
    }
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }

    const request = new XMLHttpRequest();
    request.open("PUT", "/edit-product/" + id, true);
    // request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        try {
            console.log(request);
            const response = JSON.parse(request.responseText);
            if (request.status == 200) {
                alert('Product successfully edited!');
                window.location.href = 'index.html';
            } else {
                document.getElementById("editMessage").innerHTML = 'Unable to edit product!';
                document.getElementById("editMessage").setAttribute("class", "text-danger");
            }
        } catch (e) {
            console.error("Error parsing response:", e);
            alert('An error occurred. Please try again.');
        }
    };

    request.onerror = function () {
        alert('An error occurred during the update. Please check your connection and try again.');
    };

    // Send FormData instead of JSON
    console.log(formData);
    request.send(formData);

}



