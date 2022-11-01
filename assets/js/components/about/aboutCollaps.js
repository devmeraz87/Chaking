// const accrodHeaders = document.querySelectorAll(".collapsible-header");
// accrodHeaders.forEach((ach) => {
//   ach.addEventListener("click", toggelItem, false);
// });

// function toggelItem() {
//   const currentContentEle = this.nextElementSibling;

//   const isCollapsed = currentContentEle.classList.contains("collapse");

//   accrodHeaders.forEach((ach) => {
//     const contentEle = ach.nextElementSibling;
//     if (!contentEle.classList.contains("collapse")) {
//       contentEle.classList.add("collapse");
//     }
//   });

//   if (isCollapsed) {
//     currentContentEle.classList.remove("collapse");
//     console.log(currentContentEle.scrollHeight);
//     currentContentEle.style.transition = "0.5s"
//     currentContentEle.style.height = currentContentEle.scrollHeight + "px"
//   }
// }

const accordionContent = document.querySelectorAll(".accordion_content");

accordionContent.forEach((item, index) => {
    const header = item.querySelector(".collapsible-header");

    header.addEventListener("click", () => {
        item.classList.toggle("open");

        let description = item.querySelector(".collapsible-body");

        description.classList.toggle("open_")

        if(item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`
        } else {
            description.style.height = "0px";
        }

        removeOpen(index);

        console.log(description);
    }) 
})

function removeOpen(index) {
    accordionContent.forEach((item, index_2) => {
        if(index != index_2) {
            item.classList.remove("open")
            let des = item.querySelector(".collapsible-body");
            des.classList.remove("open_")
            des.style.height = 0;
        }
    })
}