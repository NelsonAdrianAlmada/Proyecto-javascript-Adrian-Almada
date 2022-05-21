let productos= [];
let total= 0;

function comprar (producto, precio){
 productos.push (producto);
 total = total + precio;
 document.getElementById("checkout").innerHTML= `Pagar $${total}`
}

function Pagar() {
    window.alert (producto.join(", \n"));
}

const products = [
    {
      id: 1,
      name: "Tazas para niños",
      price: 900,
      image: "./imagenes/taza infantil 2.jpeg",
    },
    {
      id: 2,
      name: "Cuadros decorativos",
      price: 1300,
      image: "./imagenes/cuadro decorativo.jpeg",
    },
    {
      id: 3,
      name: "Plato personalizado",
      price: 1000,
      image: "./imagenes/plato personalizado 1.jpeg",
    },
];