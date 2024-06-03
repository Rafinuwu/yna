
document.addEventListener("DOMContentLoaded", () => {
    const plane = document.getElementById("plane");
    const cloudBackground = document.getElementById("cloud-background");
    const textContainer = document.getElementById("text-container");
    const heart = document.getElementById("heart");

    plane.addEventListener("animationend", () => {
        textContainer.style.display = "block"; // Show text after plane animation ends
    });

    heart.addEventListener("animationend", () => {
        // Stop animation at heart picture
        plane.style.animation = "none";
        cloudBackground.style.animation = "none";
    });
});
