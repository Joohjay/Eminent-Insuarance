document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (!hamburger || !navLinks) {
        console.error("Hamburger or nav links not found");
        return;
    }

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
