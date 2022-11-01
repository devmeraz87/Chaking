// // >> ==============================================================================================================================================================================================
// // >> ==============================================================================================================================================================================================
// // >>                                                                                  //  About Doc section // 
// // >> ==============================================================================================================================================================================================
// // >> ==============================================================================================================================================================================================

// >> Reguster Plugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText );


var aboutTimeLine = gsap.timeline(),
  aboutHeroHeadingSplitText = new SplitText("#aboutHeroSplitText", { type: "chars" }),
  aoboutHeroHeadingSplitTextCharecter = aboutHeroHeadingSplitText.chars; //an array of all the divs that wrap each character

gsap.set("#aboutHeroSplitText", { perspective: 800 });


aboutTimeLine.from(aoboutHeroHeadingSplitTextCharecter, {
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
        start: "top 80%",
        end: "+=800",
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
// >>                                              Animate myDetails section                                                                  //
// >> =======================================================================================================================================
let  myDetailsSplitText = new SplitText("#myDetailsSplitText", { type: "chars" }),
  myDetailsSplitTextChar = myDetailsSplitText.chars; //an array of all the divs that wrap each character

gsap.set("#myDetailsSplitTextt", { perspective: 800 });

gsap.from(myDetailsSplitTextChar, {
    scrollTrigger: {
        trigger: "._details",
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
// >>                                              Animate video section                                                                   //
// >> =======================================================================================================================================
let  aboutSectionSplitText = new SplitText("#aboutVideoSplitText", { type: "chars" }),
aboutSectionSplitTextChar = aboutSectionSplitText.chars; //an array of all the divs that wrap each character

gsap.set("#aboutVideoSplitText", { perspective: 800 });

gsap.from(aboutSectionSplitTextChar, {
    scrollTrigger: {
        trigger: "._video_thumb",
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
// >>                                              Animate Expereance section                                                                   //
// >> =======================================================================================================================================
let  experienceSectionSplitText = new SplitText("#experienceSectionSplitText", { type: "chars" }),
experienceSectionSplitTextChar = experienceSectionSplitText.chars; //an array of all the divs that wrap each character

gsap.set("#experienceSectionSplitText", { perspective: 800 });

gsap.from(experienceSectionSplitTextChar, {
    scrollTrigger: {
        trigger: "#experienceSectionSplitText",
        end: "+=500",
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


// >> Animate Accordion
let  experienceSectionSplitText2 = new SplitText("#experienceSectionSplitText2", { type: "chars" }),
experienceSectionSplitTextChar2 = experienceSectionSplitText2.chars; //an array of all the divs that wrap each character

gsap.set("#experienceSectionSplitText2", { perspective: 800 });

gsap.from(experienceSectionSplitTextChar2, {
    scrollTrigger: {
        trigger: ".collapsible",
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
// >>                                              Animate Expereance section                                                                   //
// >> =======================================================================================================================================
let  wrapperImgSectionSplitText = new SplitText("#wrapperImgSectionSplitText", { type: "chars" }),
wrapperImgSectionSplitTextChar = wrapperImgSectionSplitText.chars; //an array of all the divs that wrap each character

gsap.set("#wrapperImgSectionSplitText", { perspective: 800 });

gsap.from(wrapperImgSectionSplitTextChar, {
    scrollTrigger: {
        trigger: ".wrapper_img_card_content",
        start: "top 70%",
        end: "+=1000",
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
