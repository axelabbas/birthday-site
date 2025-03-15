document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.getElementById("random-images");
  const imageSources = [
    "assets/images/lips.png",
    "assets/images/heart2.png",
    "assets/images/heart.png",
  ];
  const numberOfImages = Math.floor(Math.random() * 6) + 5;

  const centerX = 50; // Center of the screen (50% viewport)
  const centerY = 50; // Keep original center
  const maxRadius = 18; // Spread radius

  const restrictedXMin = 45; // Left boundary of the restricted zone
  const restrictedXMax = 55; // Right boundary
  const restrictedYMin = 35; // Top boundary
  const restrictedYMax = 50; // Bottom boundary

  for (let i = 0; i < numberOfImages; i++) {
    let xPos, yPos;
    let attempts = 0;

    do {
      const angle = i * (Math.PI / 4); // Spread control
      const radius = maxRadius + Math.random() * 5; // Add randomness

      // Calculate positions
      yPos = centerY + Math.sin(angle + Math.random() * 0.5) * radius;
      xPos = centerX + Math.cos(angle) * radius;

      attempts++;

      // Ensure the image does NOT appear in the restricted zone
      if (
        !(xPos >= restrictedXMin && xPos <= restrictedXMax && 
          yPos >= restrictedYMin && yPos <= restrictedYMax) ||
        attempts > 5 // Failsafe after 5 tries
      ) {
        const img = document.createElement("img");
        img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
        img.classList.add("floating");

        img.style.top = `${yPos}%`;
        img.style.left = `${xPos}%`;
        img.style.zIndex = "-1";
        img.style.animationDuration = `${Math.random() * 5 + 5}s`;

        imageContainer.appendChild(img);
        break;
      }
    } while (true);
  }
});
