// Анімація при прокрутці
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#333";
        header.style.transition = "0.5s";
    } else {
        header.style.backgroundColor = "#4CAF50";
    }
});
