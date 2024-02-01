const item = document.querySelector(".item")
const imgItem = document.getElementById('img-item')
const cBlack = document.getElementById('c-black')
const cPink = document.getElementById('c-pink')
const cGray = document.getElementById('c-gray')
const cCian = document.getElementById('c-cian')
const Hbtn = document.getElementById('menu-h')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showImagen(currentItem);
    menuM()
});

const imagenes = [
    {
        img: "../01 Store/img/store/01.png",
    },
    {
        img: "../01 Store/img/store/02.png",
    },
    {
        img: "../01 Store/img/store/03.png",  
    },
    {
        img: "../01 Store/img/store/04.png",  
    },
    
];


function menuM (){
    Hbtn.addEventListener('click', (e) =>  {
       let menuMovil = document.getElementById('container-menu-items')
            if (menuMovil.style.display === "none" || menuMovil.style.display === '') {
                menuMovil.style.display = "flex"
                console.log("agregando flex")
            } else {
              
              menuMovil.style.display = "none"
              console.log("Quitando flex")
            }

    })
}


function showImagen(){
    const item = imagenes[currentItem];
    imgItem.src = item.img;
   
}

cBlack.addEventListener('click', function(){
    currentItem = 0
    showImagen(currentItem)
});

cGray.addEventListener('click', function(){
    currentItem = 1
    showImagen(currentItem)
});

cCian.addEventListener('click', function(){
    currentItem = 2
    showImagen(currentItem)
});

cPink.addEventListener('click', function(){
    currentItem = 3
    showImagen(currentItem)
});



