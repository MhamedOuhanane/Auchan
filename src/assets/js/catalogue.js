const body = document.getElementsByTagName("body");

const iconMenu = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

iconMenu.onclick = () => {
    // add class 'noScroll' to body to stop scrolling when burger menu is open
    body[0].classList.toggle("noScroll");
    menu.classList.toggle("drop-menu");
};



var gridBtn = document.getElementById('grid');
var listBtn = document.getElementById('list');

var gridContainer = document.getElementById('grid-container');
var listContainer = document.getElementById('list-container');



gridBtn.addEventListener('click', function(){
    gridContainer.style.display = 'grid';
    listContainer.style.display = 'none';
    gridBtn.classList.add('active11');
    listBtn.classList.remove('active11');
})
listBtn.addEventListener('click', function(){
    gridContainer.style.display = 'none';
    listContainer.style.display = 'flex';
    gridBtn.classList.remove('active11');
    listBtn.classList.add('active11');
})
    

