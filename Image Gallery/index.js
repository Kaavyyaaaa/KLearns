// Get the modal
var modal = document.getElementById("MyModal");

// Get the modal image and caption elements
var modalImg = document.getElementById("img1");
var captionText = document.getElementById("MyCaption");

// Get all images inside .image containers
var images = document.querySelectorAll(".gallery .image img");

// Loop through each image and add a click event listener
images.forEach(function(img) {
    img.addEventListener('click', function() {
        modal.style.display = "block"; // Display the modal
        modalImg.src = this.src; // Set modal image src to clicked image src
        captionText.innerHTML = this.alt; // Set caption to image alt text
    });
});

// Get the close button element
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', function() {
    modal.style.display = "none"; // Hide the modal
});
