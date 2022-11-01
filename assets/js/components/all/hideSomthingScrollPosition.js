const logo = document.querySelector("._js_navLogo");

window.addEventListener("scroll", () => {
    if(scrollY > 100) {
        logo.style.visibility = "hidden";
    } else {
        logo.style.visibility = "visible"
    }

})