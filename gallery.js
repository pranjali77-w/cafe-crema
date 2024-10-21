document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the uploaded file
    const fileInput = document.getElementById('uploadImage');
    const file = fileInput.files[0];

    // Ensure that the same image doesn't get uploaded twice consecutively
    if (!file) {
        alert('Please select an image to upload.');
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {
        const gallery = document.getElementById('gallery');

        // Create a new gallery item with the uploaded image and delete icon
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        // Avoid duplicate image upload by clearing file input value
        fileInput.value = "";

        galleryItem.innerHTML = `
            <img src="${event.target.result}" alt="Uploaded Image">
            <div class="gallery-actions">
                <span class="like-icon" onclick="toggleLike(this)"><i class="far fa-heart"></i></span>
                <span class="seen-icon" onclick="markSeen(this)"><i class="far fa-eye"></i></span>
                <span class="remove-icon" onclick="removeImage(this)"><i class="fas fa-trash-alt"></i></span>
            </div>
        `;

        gallery.appendChild(galleryItem);
    };

    reader.readAsDataURL(file);
});

// Function to toggle the like icon (empty to filled heart)
function toggleLike(el) {
    const icon = el.querySelector('i');
    if (icon.classList.contains('fas')) {
        icon.classList.remove('fas');
        icon.classList.add('far');
    } else {
        icon.classList.remove('far');
        icon.classList.add('fas', 'liked');
        icon.style.color = '#ff4757';
    }
}

// Function to mark an image as seen (highlighted in green)
function markSeen(el) {
    const icon = el.querySelector('i');
    if (icon.classList.contains('seen')) {
        icon.classList.remove('seen');
        icon.style.color = '#1e90ff';
    } else {
        icon.classList.add('seen');
        icon.style.color = '#32CD32';
    }
}

// Function to remove the image from the gallery
function removeImage(el) {
    const galleryItem = el.closest('.gallery-item');
    galleryItem.remove();
}
