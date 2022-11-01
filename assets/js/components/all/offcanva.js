// >> Register plugin /
gsap.registerPlugin( SplitText );

// >> Get nessesariy element
const body = document.body;
const btnBurger = document.querySelector("._btn_burger");
const offCanva = document.querySelector(".offCanva");

// >> get offcanva links
let offCanvaSplitText = new SplitText("#offCanvaLink", { type: "chars" }),
  offCanvaSplitTextChar = offCanvaSplitText.chars;

gsap.set("#offCanvaLink", { perspective: 800 });


// >> Toggle Menu
let menuOpen = false;

// >> OffCanvaFunction /
btnBurger.addEventListener("click", () => {
    if(!menuOpen) {
        // >> Add class
        offCanva.classList.add("active");
        btnBurger.classList.add("active");
        body.classList.add("_document_locked");

        gsap.to("._offCanvaLeftItem", {
            y: "0",
            duration: 1.5,
            ease: "expo.inOut",
            position: "fixed",
        })

        gsap.to(".offCanvaLeft", {
            // y: "0",
            height: "100%",
            duration: 1.5,
            delay: 0.1,
            ease: "expo.inOut",
        })

        gsap.to(".offCanvaRight", {
            // y: 0,
            height: "100%",
            duration: 1.5,
            ease: "expo.inOut"
        })


        // >> Animate offCanva text /
        gsap.from(offCanvaSplitTextChar, {
            delay: 1,
            duration: 0.5,
            opacity: 0,
            scale: 1,
            y: 2,
            rotationX: -10,
            transformOrigin: "0% 50% -50",
            ease: "Back.InOut",
            stagger: 0.01
          })

        menuOpen = true;

    } else {
        // >> Remove offCanva Active calss
        offCanva.classList.remove("active");
        btnBurger.classList.remove("active");
        body.classList.remove("_document_locked");

        gsap.to("._offCanvaLeftItem", {
            y: "-110vh",
            duration: 1.5,
            delay: 0.1,
            ease: "expo.inOut",
            position: "fixed",
        })

        gsap.to(".offCanvaLeft", {
            height: "0%",
            delay: 0.1,
            duration: 1.5,
            ease: "expo.inOut",
        })

        gsap.to(".offCanvaRight", {
            height: "0%",
            duration: 1.5,
            ease: "expo.inOut"
        })

        menuOpen = false;
    }
})
