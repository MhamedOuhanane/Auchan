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
        const response = await fetch('https://dummyjson.com/products?limit=60');
        const json = await response.json();
        console.log(json);
        displayAllCategoriesList(json);
        displayAllCategoriesGrid(json);
    }
    catch(error){
        console.error(error.message);
    }
}


function displayAllCategoriesList(data){
    data.products.forEach((element,index) => {
        if(index<12){
            listPage1.appendChild(generateCardList(element));
        }
        else if(index<24){
            listPage2.appendChild(generateCardList(element));
        }
        else if(index<36){
            listPage3.appendChild(generateCardList(element));
        }
        else if(index<48){
            listPage4.appendChild(generateCardList(element));
        }
        else if(index<60){
            listPage5.appendChild(generateCardList(element));
        }
    });
    ListPagination();
}

function displayAllCategoriesGrid(data){
    data.products.forEach((element,index) => {
        if(index<12){
            gridPage1.appendChild(generateCardGrid(element));
        }
        else if(index<24){
            gridPage2.appendChild(generateCardGrid(element));
        }
        else if(index<36){
            gridPage3.appendChild(generateCardGrid(element));
        }
        else if(index<48){
            gridPage4.appendChild(generateCardGrid(element));
        }
        else if(index<60){
            gridPage5.appendChild(generateCardGrid(element));
        }
    });
    gridPagination();
}

function generateCardList(product){
    let div = document.createElement('div');
    div.classList = 'bg-white shadow-sm hover:shadow-md rounded-lg p-4 w-[95%] max-w-3xl flex items-center gap-10';
    div.innerHTML=`
                    <div class="w-1/4 flex justify-center max-sm:w-2/5">
                <img src="${product.thumbnail}" alt="${product.title}" class="w-auto h-full">
              </div>
              <div class="w-3/4 max-sm:w-3/5">
                <div class="flex justify-between items-center text-2xl max-sm:text-sm">
                  <h2 class="font-bold">${product.title}</h2>
                <div class="flex items-center space-x-1">
                    <i class="fa-regular fa-star" style="color: #FFD43B;"></i>
                    <span class="text-[#959595] font-medium">4.5</span>
                    <span class="text-[#E4E4E4] ">(12)</span>
                </div>         
                </div>
                <p class="text-base text-[#959595] mt-1 max-sm:text-xs">
                  ${product.description}
                </p>
                <div class="flex justify-between items-center mt-4">
                  <span class="text-2xl font-bold text-darkViolet">${product.price}$</span>
                  <button class="text-2xl bg-darkViolet text-white px-5 py-2 rounded-[20px] max-sm:text-base">
                    Ajoutez 
                    <i class="fa-solid fa-cart-shopping"></i>  
                  </button>
                </div>       
              </div>
    `;

    
    return div;

}
function generateCardGrid(product){
    let div = document.createElement('div');
    div.classList='card shadow-sm hover:shadow-md transition-all ease-out delay-75';
    div.innerHTML = `
                        <div class="h-[140px] center">
                <img src="${product.thumbnail}" alt="${product.title}" class="h-full object-contain">
              </div>
              <div class="flex justify-between items-center flex-wrap">
                <span class="font-bold text-[1.2rem] max-md:text-[1rem] max-sm:text-[.7rem]">${product.title}</span>
                <div class="flex items-center gap-2 text-gray-500 max-md:text-xs">
                  <img src="assets/images/icons/star.svg" alt="star icon" class="size-5">
                  <span class="">4.5</span>
                  <span>( 21 )</span>
                </div>
                <span class="text-gray-700 max-md:text-[.7rem] max-sm:text-[.5rem] min-h-[60px] max-md:min-h-[50px]">${product.description}</span>
                <div class="flex items-center justify-between w-full flex-wrap pt-4 gap-4">
                  <span class="font-bold text-darkViolet text-[1.4rem] max-md:text-[1rem]">${product.price}$</span>
                  <button class="primary-btn center gap-2 flex-1">
                    <span class="text-[.8rem] max-sm:text-[.5rem]">AJOUTER</span>
                    <img src="assets/images/icons/cart-white.svg" class="size-4" alt="">
                  </button>
                </div>
              </div>
    `;
    return div;
}

getdata();


function ListPagination(){
    btn1.addEventListener('click', function(){
        listPage1.classList.add('flex');
        listPage1.classList.remove('hidden');
        btn1.classList.add('active12');

        listPage2.classList.add('hidden');
        btn2.classList.remove('active12');

        listPage3.classList.add('hidden');
        btn3.classList.remove('active12');

        listPage4.classList.add('hidden');
        btn4.classList.remove('active12');

        listPage5.classList.add('hidden');
        btn5.classList.remove('active12');
    });
    btn2.addEventListener('click', function(){
        listPage2.classList.add('flex');
        listPage2.classList.remove('hidden');
        btn2.classList.add('active12');

        listPage1.classList.add('hidden');
        btn1.classList.remove('active12');

        listPage3.classList.add('hidden');
        btn3.classList.remove('active12');

        listPage4.classList.add('hidden');
        btn4.classList.remove('active12');

        listPage5.classList.add('hidden');
        btn5.classList.remove('active12');
    });
    btn3.addEventListener('click', function(){
        listPage3.classList.add('flex');
        listPage3.classList.remove('hidden');
        btn3.classList.add('active12');

        listPage1.classList.add('hidden');
        btn1.classList.remove('active12');

        listPage2.classList.add('hidden');
        btn2.classList.remove('active12');

        listPage4.classList.add('hidden');
        btn4.classList.remove('active12');

        listPage5.classList.add('hidden');
        btn5.classList.remove('active12');
    });
    btn4.addEventListener('click', function(){
        listPage4.classList.add('flex');
        listPage4.classList.remove('hidden');
        btn4.classList.add('active12');

        listPage1.classList.add('hidden');
        btn1.classList.remove('active12');

        listPage2.classList.add('hidden');
        btn2.classList.remove('active12');
        
        listPage3.classList.add('hidden');
        btn3.classList.remove('active12');
        
        listPage5.classList.add('hidden');
        btn5.classList.remove('active12');
    });
    btn5.addEventListener('click', function(){
        listPage5.classList.add('flex');
        listPage5.classList.remove('hidden');
        btn5.classList.add('active12');

        listPage1.classList.add('hidden');
        btn1.classList.remove('active12');

        listPage2.classList.add('hidden');
        btn2.classList.remove('active12');

        listPage3.classList.add('hidden');
        btn3.classList.remove('active12');

        listPage4.classList.add('hidden');
        btn4.classList.remove('active12');
    });
}

function gridPagination(){
    btnGrid1.addEventListener('click', function(){
        gridPage1.classList.add('grid');
        gridPage1.classList.remove('hidden');
        btnGrid1.classList.add('active12');

        gridPage2.classList.add('hidden');
        btnGrid2.classList.remove('active12');

        gridPage3.classList.add('hidden');
        btnGrid3.classList.remove('active12');

        gridPage4.classList.add('hidden');
        btnGrid4.classList.remove('active12');

        gridPage5.classList.add('hidden');
        btnGrid5.classList.remove('active12');
    });
    btnGrid2.addEventListener('click', function(){
        gridPage2.classList.add('grid');
        gridPage2.classList.remove('hidden');
        btnGrid2.classList.add('active12');

        gridPage1.classList.add('hidden');
        btnGrid1.classList.remove('active12');

        gridPage3.classList.add('hidden');
        btnGrid3.classList.remove('active12');

        gridPage4.classList.add('hidden');
        btnGrid4.classList.remove('active12');

        gridPage5.classList.add('hidden');
        btnGrid5.classList.remove('active12');
    });
    btnGrid3.addEventListener('click', function(){
        gridPage3.classList.add('grid');
        gridPage3.classList.remove('hidden');
        btnGrid3.classList.add('active12');

        gridPage1.classList.add('hidden');
        btnGrid1.classList.remove('active12');

        gridPage2.classList.add('hidden');
        btnGrid2.classList.remove('active12');

        gridPage4.classList.add('hidden');
        btnGrid4.classList.remove('active12');

        gridPage5.classList.add('hidden');
        btnGrid5.classList.remove('active12');
    });
    btnGrid4.addEventListener('click', function(){
        gridPage4.classList.add('grid');
        gridPage4.classList.remove('hidden');
        btnGrid4.classList.add('active12');

        gridPage1.classList.add('hidden');
        btnGrid1.classList.remove('active12');

        gridPage2.classList.add('hidden');
        btnGrid2.classList.remove('active12');
        
        gridPage3.classList.add('hidden');
        btnGrid3.classList.remove('active12');
        
        gridPage5.classList.add('hidden');
        btnGrid5.classList.remove('active12');
    });
    btnGrid5.addEventListener('click', function(){
        gridPage5.classList.add('grid');
        gridPage5.classList.remove('hidden');
        btnGrid5.classList.add('active12');

        gridPage1.classList.add('hidden');
        btnGrid1.classList.remove('active12');

        gridPage2.classList.add('hidden');
        btnGrid2.classList.remove('active12');

        gridPage3.classList.add('hidden');
        btnGrid3.classList.remove('active12');

        gridPage4.classList.add('hidden');
        btnGrid4.classList.remove('active12');
    });
}