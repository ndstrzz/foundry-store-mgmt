// function to preview selected image
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const imagePreview = document.getElementById('image-preview');
        imagePreview.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function addProduct() {
    const name = document.getElementById("name").value.trim();
    const price = document.getElementById("price").value.trim();
    const description = document.getElementById("description").value.trim();
    const size = document.getElementById("size").value.trim();
    const imageFile = document.getElementById("image-upload").files[0];

    // Validation checks in specific order
    if (!name) {
        alert("Unable to add product: Name is required.");
        return;
    }

    if (!price) {
        alert("Price is required.");
        return;
    }

    if (!description) {
        alert("Please fill in all the fields.");
        return;
    }

    if (!size) {
        alert("Please fill in all the fields.");
        return;
    }

    if (!imageFile) {
        alert("Please select an image for the product.");
        return;
    }

    // Additional validations
    if (description.length > 250) {
        alert("Description must not exceed 250 characters.");
        return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", parseFloat(price).toFixed(2));
    formData.append("description", description);
    formData.append("size", size);
    formData.append("image", imageFile);
    
    const request = new XMLHttpRequest();
    request.open("POST", "/add-product", true);

    request.onload = function () {
        try {
            const response = JSON.parse(request.responseText);

            if (response.success) {
                if (confirm('Product successfully uploaded! Click OK to go back to the homepage.')) {
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