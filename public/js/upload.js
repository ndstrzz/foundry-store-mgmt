// Function to preview the selected image
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const imagePreview = document.getElementById('image-preview');
        imagePreview.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function addProduct() {
    const imageFile = document.getElementById("image-upload").files[0];

    if (!imageFile) {
        alert("Please select an image for the product.");
        return;
    }

    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("price", parseFloat(document.getElementById("price").value).toFixed(2));
    formData.append("description", document.getElementById("description").value);
    formData.append("size", document.getElementById("size").value);
    formData.append("image", imageFile);

    const request = new XMLHttpRequest();
    request.open("POST", "/add-product", true);

    request.onload = function () {
        try {
            const response = JSON.parse(request.responseText);

            if (response.success) {
                // Display the success message
                if (confirm('Product successfully uploaded! Click OK to go back to the homepage.')) {
                    // Redirect to index.html
                    window.location.href = "index.html";
                }
            } else {
                alert('Unable to add product: ' + (response.message || 'Unknown error.'));
            }
        } catch (e) {
            console.error("Error parsing response:", e);
            alert('An error occurred. Please try again.');
        }
    };

    request.onerror = function () {
        alert('An error occurred during the upload. Please check your connection and try again.');
    };

    request.send(formData);
}
