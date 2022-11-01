gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let container = document.querySelector('._horizontal_scroll_container')
let sections = gsap.utils.toArray("._horizontal_scroll_container_panel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    delay: 1,
    scrollTrigger: {
      trigger: "._horizontal_scroll_container",
      pin: true,
      scrub: true,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: `+=${container.offsetWidth}`
    }
  });


// red section
gsap.to("._horizontal_scroll_container_first_panel_", {
  xPercent: -100,
  duration: 1,
  ease: "none",
  scrollTrigger: {
    trigger: "._horizontal_scroll_container_panel",
    containerAnimation: scrollTween,
    delay: 3,
    scrub: true
  }
});


gsap.to("._horizontal_scroll_container_first_panel_", {
  scrollTrigger:  {
    trigger: "._horizontal_scroll_container_first_panel_",
    end: "top top",
    scrub: true,
  }, 
  scale: 1, 
  y: 0
})