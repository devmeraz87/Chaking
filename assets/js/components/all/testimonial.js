const _testimonials_slide = document.querySelector("._testimonials_row");
const _testimonials_buttons = document.querySelectorAll("._js_testimonials_btn");

_testimonials_buttons[0].onclick = function() {
    _testimonials_slide.style.transform = "translatex(0px)";

    // >> Remove and add calss from active button 
    for(i=0; i<5; i++) {
        _testimonials_buttons[i].classList.remove("active");
    }
    this.classList.add("active");
}
_testimonials_buttons[1].onclick = function() {
    _testimonials_slide.style.transform = "translatex(-900px)";

    // >> Remove and add calss from active button 
    for(i=0; i<5; i++) {
        _testimonials_buttons[i].classList.remove("active");
    }
    this.classList.add("active");
}
_testimonials_buttons[2].onclick = function() {
    _testimonials_slide.style.transform = "translatex(-1800px)";

    // >> Remove and add calss from active button 
    for(i=0; i<5; i++) {
        _testimonials_buttons[i].classList.remove("active");
    }
    this.classList.add("active");
}
_testimonials_buttons[3].onclick = function() {
    _testimonials_slide.style.transform = "translatex(-2700px)";

    // >> Remove and add calss from active button 
    for(i=0; i<5; i++) {
        _testimonials_buttons[i].classList.remove("active");
    }
    this.classList.add("active");
}
_testimonials_buttons[4].onclick = function() {
    _testimonials_slide.style.transform = "translatex(-3600px)";

    // >> Remove and add calss from active button 
    for(i=0; i<5; i++) {
        _testimonials_buttons[i].classList.remove("active");
    }
    this.classList.add("active");
}
