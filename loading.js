// Array of images to preload
const images = [
  "/assets/images/border2.png",
  "/assets/images/border.png",
  "/assets/images/heart.png",
  "/assets/images/heart2.png",
  "/assets/images/image.jpg",
  "/assets/images/pattern.jpg",
  "/assets/images/lips.png",
];

let imagesLoaded = 0;
let totalAssets = images.length + 1; // Adding 1 for font preload

// Preload all images
images.forEach((src) => {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    imagesLoaded++;
    checkAssetsLoaded();
  };
});


// Function to check if all assets are loaded
function checkAssetsLoaded() {
  if (imagesLoaded + 1 === totalAssets) {
    // Adding 1 for font
    // All assets are loaded, redirect to the main page
    window.location.href = "main.html"; // Redirect to your main page
  }
}
