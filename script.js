function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("mobile-open");
}


// Close mobile navigation after clicking a link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        const nav = document.querySelector("nav");

        nav.classList.remove("mobile-open");

    });

});