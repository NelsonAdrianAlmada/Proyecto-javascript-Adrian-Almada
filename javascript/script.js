//variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');

let buyThings = [];
let totalCard = 0;
let countProduct = 0;

//functions
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);
    
    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);
    }
}
function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        
        countProduct--;
    }
    loadHtml();
}
function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
}

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">$ ${price}</h5>
                <h6>Cantidad: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;
        
        containerBuyCart.appendChild(row);
        
        priceTotal.innerHTML = totalCard;
        
        amountProduct.innerHTML = countProduct;
    });
}

function clearHtml(){
    containerBuyCart.innerHTML = '';
 }


 /*const productos= [{
     id:1,
     nombre:"Tazas personalizadas",
     precio: 900,
     imagen:"./imagenes/tazas personalizadas.jpeg"
 },
 {
    id:2,
    nombre:"Mueble antiguo",
    precio: 10900,
    imagen:"./imagenes/mueble antiguo restaurado.jpeg"
}
{
    id:3,
    nombre:"Azucarera",
    precio: 900,
    imagen:"./imagenes/azucarera.jpeg"
}
{
    id:4,
    nombre:"Tea for one",
    precio: 2000,
    imagen:"./imagenes/tea for one.jpeg"
}
{
    id:5,
    nombre:"Centro de mesa",
    precio: 800,
    imagen:"./imagenes/centro de mesa pintado a mano 1.jpeg"
}
{
    id:6,
    nombre:"Cuadros",
    precio: 1200,
    imagen:"./imagenes/cuadro 1.jpeg"
}
{
    id:7,
    nombre:"Tazas para niños",
    precio: 600,
    imagen:"./imagenes/taza infantil 1.jpeg"
}
{
    id:8,
    nombre:"Tazas bombe pintadas a mano",
    precio: 900,
    imagen:"./imagenes/taza bombe.jpeg"
}
{
    id:9,
    nombre:"Platos personalizados",
    precio: 1200,
    imagen:"./imagenes/plato personalizado.jpeg"
}
{
    id:10,
    nombre:"Juego de mate",
    precio: 2200,
    imagen:"./imagenes/juego de mate.jpeg"
}
{
    id:11,
    nombre:"Caja con tohallas",
    precio: 1400,
    imagen:"./imagenes/caja con tres tohallitas 1.jpeg"
}

 ]

 function crearCards() {
     productos.forEach(element => {
         
     });
     
 }*/

