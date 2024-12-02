// Function to preview selected image
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

    if (name.length < 2) {
        alert("Name must be at least 2 characters long");
        return;
    }

    if (price < 0) {
        alert("Price cannot be negative");
        return;
    }


    // Proceed with form submission logic (e.g., AJAX POST request)
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('size', size);
    formData.append('image', imageFile);

    // Example of an AJAX POST request (you can adjust based on your API setup)
    fetch('/add-product', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Product uploaded successfully!');
        } else {
            alert('Unable to add product: ' + (data.message || 'Unknown error.'));
        }
    })
    .catch((error) => {
        alert('An error occurred. Please try again.');
    });
}