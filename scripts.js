// Redirect function for the button
function redirect() {
    window.location.href = "your-target-page.html"; // Replace with the target URL or page
}

// Select the image element
const cigaretteImage = document.getElementById("clickable-cigarette");

// Add click event to the cigarette area
cigaretteImage.addEventListener("click", function (event) {
    const clickX = event.offsetX;
    const clickY = event.offsetY;
    const imageWidth = cigaretteImage.clientWidth;
    const imageHeight = cigaretteImage.clientHeight;

    // Define clickable area dimensions (adjust as needed)
    const cigaretteArea = {
        xStart: 0.65 * imageWidth,
        xEnd: 0.85 * imageWidth,
        yStart: 0.6 * imageHeight,
        yEnd: 0.8 * imageHeight
    };

    // Check if the click was within the cigarette area
    if (
        clickX >= cigaretteArea.xStart && clickX <= cigaretteArea.xEnd &&
        clickY >= cigaretteArea.yStart && clickY <= cigaretteArea.yEnd
    ) {
        redirect(); // Redirect on click within the cigarette area
    }
});
