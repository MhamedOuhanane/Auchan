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
getdata();

function displayallcategories(data){

}

function generateCardList(name,desc,price,img){
    let div = document.createElement('div');
    div.classList = 'bg-white shadow-sm hover:shadow-md rounded-lg p-4 w-[95%] max-w-3xl flex items-center gap-10';
    div.innerHTML=`
                    <div class="w-1/4 flex justify-center">
                <img src="${img}" alt="${name}" class="w-40 h-40 object-contain">
              </div>
              <div class="w-3/4">
                <div class="flex justify-between items-center text-2xl">
                  <h2 class="font-bold">${name}</h2>
                <div class="flex items-center space-x-1">
                    <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                    <span class="text-[#959595] font-medium">4.5</span>
                    <span class="text-[#E4E4E4] ">(12)</span>
                </div>         
                </div>
                <p class="text-base text-[#959595] mt-1">
                  ${desc}
                </p>
                <div class="flex justify-between items-center mt-4">
                  <span class="text-2xl font-bold text-darkViolet">${price}</span>
                  <button class="text-2xl bg-darkViolet text-white px-5 py-2 rounded-[20px]">
                    Ajoutez 
                    <i class="fa-solid fa-cart-shopping"></i>  
                  </button>
                </div>       
              </div>
    `
    return div;

}
function generateCardGrid(name,desc,price,img){
    let div = document.createElement('div');
    div.classList.add('card shadow-sm hover:shadow-md transition-all ease-out delay-75');
    div.innerHTML = `
                        <div class="h-[140px] center">
                <img src="${img}" alt="" class="h-full object-contain">
              </div>
              <div class="flex justify-between items-center flex-wrap">
                <span class="font-bold text-[1.2rem] max-md:text-[1rem] max-sm:text-[.7rem]">${name}</span>
                <div class="flex items-center gap-2 text-gray-500 max-md:text-xs">
                  <img src="assets/images/icons/star.svg" alt="star icon" class="size-5">
                  <span class="">4.5</span>
                  <span>( 21 )</span>
                </div>
                <span class="text-gray-700 max-md:text-[.7rem] max-sm:text-[.5rem] min-h-[60px] max-md:min-h-[50px]">${desc}</span>
                <div class="flex items-center justify-between w-full flex-wrap pt-4 gap-4">
                  <span class="font-bold text-darkViolet text-[1.4rem] max-md:text-[1rem]">${price}</span>
                  <button class="primary-btn center gap-2 flex-1">
                    <span class="text-[.8rem] max-sm:text-[.5rem]">AJOUTER</span>
                    <img src="assets/images/icons/cart-white.svg" class="size-4" alt="">
                  </button>
                </div>
              </div>
    `;
}
