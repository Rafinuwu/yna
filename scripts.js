document.addEventListener("DOMContentLoaded", () => {
    const plane = document.getElementById("plane");
    const cloudBackground = document.getElementById("cloud-background");
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
    const heartContainer = document.getElementById("heart-container");
    const text3 = document.getElementById("text3");
    const yeanaPhoto = document.getElementById("yeana-photo");

    let step = 0;

    function showText(element, delay) {
        setTimeout(() => {
            element.style.display = "block";
        }, delay);
    }

    function fadeOut(element, delay) {
        setTimeout(() => {
            element.style.display = "none";
        }, delay);
    }

    function loopAnimation() {
        if (step === 0) {
            plane.style.display = "block";
            cloudBackground.style.display = "block";
            showText(text1, 5000);
            step++;
        } else if (step === 1) {
            fadeOut(text1, 2000);
            showText(text2, 4000);
            step++;
        } else if (step === 2) {
            fadeOut(text2, 2000);
            showText(heartContainer, 4000);
            showText(text3, 5000);
            showText(yeanaPhoto, 6000);
            step++;
        } else if (step === 3) {
            plane.style.display = "none";
            cloudBackground.style.display = "none";
            text1.style.display = "none";
            text2.style.display = "none";
            heartContainer.style.display = "none";
            text3.style.display = "none";
            yeanaPhoto.style.display = "none";
            step = 0;
            loopAnimation();
        }
    }

    document.addEventListener("click", () => {
        loopAnimation();
    });

    loopAnimation();
});
