// >> For loading content
const secondEase = CustomEase.create("custom", "M0,0 C0.266,0.412 0.523,0.301 0.652,0.422 0.696,0.463 0.78,1 1,1 ");
gsap.to("._first", {duration: 1.5, delay: 1, ease: secondEase, height: "0%"})
gsap.to("._second", {duration: 1.5,   delay: 3, ease: secondEase, height: "0%"})