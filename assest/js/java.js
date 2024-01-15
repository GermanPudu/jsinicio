const cantidadDom = document.querySelector('.cantidad');
const precioInicial = document.querySelector('.precio-inicial');
const valorTotal = document.querySelector('.valor-total');
const aumentarBoton = document.querySelector('.card button:nth-of-type(1)');
const disminuirBoton = document.querySelector('.card button:nth-of-type(2)');


const precioBase = 400000;
let cantidad = 0;


function cantidadTotal() {
  const total = precioBase * cantidad;
  valorTotal.innerHTML = total.toLocaleString();
}


aumentarBoton.addEventListener('click', function () {
  cantidad++;
  cantidadDom.innerHTML = cantidad; 
  cantidadTotal();
});


disminuirBoton.addEventListener('click', function () {
  if (cantidad > 0) {
    cantidad--;
    cantidadDom.innerHTML = cantidad;
    cantidadTotal();
  }
});


cantidadDom.innerHTML = cantidad;
precioInicial.innerHTML = precioBase.toLocaleString();
cantidadTotal();




