var gridBtn = document.getElementById('grid');
var listBtn = document.getElementById('list');

var gridContainer = document.getElementById('grid-container');
var listContainer = document.getElementById('list-container');



gridBtn.addEventListener('click', function(){
    gridContainer.style.display = 'grid';
    listContainer.style.display = 'none';
    gridBtn.classList.add = 'active 11';
    listBtn.classList.remove = 'active 11';
})
listBtn.addEventListener('click', function(){
    gridContainer.style.display = 'none';
    listContainer.style.display = 'flex';
    gridBtn.classList.remove = 'active 11';
    listBtn.classList.add = 'active 11';
})


