// // >> ==============================================================================================================================================================================================
// // >> ==============================================================================================================================================================================================
// // >>                                                                                  //  Home Section // 
// // >> ==============================================================================================================================================================================================
// // >> ==============================================================================================================================================================================================

// >> Reguster Plugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText );



// >> =======================================================================================================================================
// >>                                                    Animate hero Section                                                              // 
// >> =======================================================================================================================================
var tl = gsap.timeline(),
  mySplitText = new SplitText("#quote", { type: "chars" }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set("#quote", { perspective: 800 });


tl.from(chars, {
  delay: 4,
  duration: 0.5,
  opacity: 0,
  scale: 1,
  y: 2,
  rotationX: -10,
  transformOrigin: "0% 50% -50",
  ease: "Back.InOut",
  stagger: 0.02
});




// >> =======================================================================================================================================
// >>                                              Animate About section                                                                   //
// >> =======================================================================================================================================
let  aboutSplitText = new SplitText("#aboutSplitText", { type: "chars" }),
  aboutSplitTextChar = aboutSplitText.chars; //an array of all the divs that wrap each character

gsap.set("#aboutSplitText", { perspective: 800 });

gsap.from(aboutSplitTextChar, {
    scrollTrigger: {
        trigger: "._about_content",
        // markers: true,
    },

    duration: 0.5,
    opacity: 0,
    scale: 1,
    y: 2,
    rotationX: -10,
    transformOrigin: "0% 50% -50",
    ease: "Back.InOut",
    stagger: 0.01
})



// >> =======================================================================================================================================
// >>                                              Animate Marquee Section                                                                 //
// >> =======================================================================================================================================
let marqueeSplitText = new SplitText("#marqueeSplitText", { type: "chars" }),
  marqueeSplitTextChar = marqueeSplitText.chars;

gsap.set("#marqueeSplitText", { perspective: 800 });

gsap.from(marqueeSplitTextChar, {
  scrollTrigger: {
    trigger: "#marqueeSplitText",
    start: "top 70%",
    end: "+=500",
    // markers: true,
    // scrub: true
  },

  duration: 0.5,
  opacity: 0,
  scale: 1,
  y: 2,
  rotationX: -10,
  transformOrigin: "0% 50% -50",
  ease: "Back.InOut",
  stagger: 0.01
})
    


// >> =======================================================================================================================================
// >>                                                 Animate Video section                                                                //
// >> =======================================================================================================================================
let videoSectionSplitText = new SplitText("#video_section_marquee_text", { type: "chars" }),
  videoSectionSplitTextChar = videoSectionSplitText.chars;

gsap.set("#video_section_marquee_text", { perspective: 800 });

gsap.from(videoSectionSplitTextChar, {
  scrollTrigger: {
    trigger: "#video_section_marquee_text",
    start: "top 80%",
    end: "+=500",
    // markers: true,
    // scrub: true
  },

  duration: 0.5,
  opacity: 0,
  scale: 1,
  y: 2,
  rotationX: -10,
  transformOrigin: "0% 50% -50",
  ease: "Back.InOut",
  stagger: 0.01
})
    


// >> =======================================================================================================================================
// >>                                                 About doctor section                                                                 //
// >> =======================================================================================================================================
let aboutDoctorSectionSplitText = new SplitText("#doctor_section_splitText", { type: "chars" }),
  aboutDoctorSectionSplitTextChar = aboutDoctorSectionSplitText.chars;

gsap.set("#doctor_section_splitText", { perspective: 800 });

gsap.from(aboutDoctorSectionSplitTextChar, {
  scrollTrigger: {
    trigger: "._section_about_doctor",
    start: "top 80%",
    end: "+=800",
    // markers: true,
    // scrub: true
  },

  duration: 0.5,
  opacity: 0,
  scale: 1,
  y: 2,
  rotationX: -10,
  transformOrigin: "0% 50% -50",
  ease: "Back.InOut",
  stagger: 0.01
})
    

