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
    gridContainer.style.display = 'block';
    listContainer.style.display = 'none';
    gridBtn.classList.add('active11');
    listBtn.classList.remove('active11');
})
listBtn.addEventListener('click', function(){
    gridContainer.style.display = 'none';
    listContainer.style.display = 'block';
    gridBtn.classList.remove('active11');
    listBtn.classList.add('active11');
})



async function getdata(){
    try{
        const response = await fetch('../assets/data/Catégorie.json');
        const json = await response.json();
        console.log(json)
        return json;
    }
    catch(error){
        console.error(error.message);
    }
}

