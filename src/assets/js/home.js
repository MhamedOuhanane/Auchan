const body = document.getElementsByTagName("body");

const iconMenu = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

iconMenu.onclick = () => {
    // add class 'noScroll' to body to stop scrolling when burger menu is open
    body[0].classList.toggle("noScroll");
    menu.classList.toggle("drop-menu");
};

// import json ads data from its path
import carouselData from "../data/images-carousel.json" with {type: "json"};
const mainImage = document.getElementById("image-carousel");
const chevronLeft = document.getElementById("chevron-left");
const chevronRight = document.getElementById("chevron-right");

mainImage.src = carouselData[0].url;
let index = 0;
chevronRight.onclick = function nextImage() {
    index++;
    if (index == 5) index = 0;
    mainImage.src = carouselData[index].url;
}
chevronLeft.onclick = function previousImage() {
    index--;
    if (index == -1) index = carouselData.length - 1;
    mainImage.src = carouselData[index].url;
}
// make images slide itself each 5s
setInterval(() => {
    index++;
    if (index == 5) index = 0;
    mainImage.src = carouselData[index].url;
}, 5000);