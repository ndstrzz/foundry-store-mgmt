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




}