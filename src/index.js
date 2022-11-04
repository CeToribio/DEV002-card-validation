import validator from './validator.js';

//Código para eliminar o el "efecto" submit
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", controlSubmit);

function controlSubmit(formulario) {
    formulario.preventDefault()
}

//alert seleccionaste visa o mastercard
const marcaTarjeta = document.getElementById("marca");
const visa = document.getElementById("VISA");
// const masterCard = document.getElementById("MasterCard")
marcaTarjeta.addEventListener("input", alerta);

function alerta() {
    if (visa.checked) {
        alert("Seleccionaste VISA")
    }
    else {
        alert("Seleccionaste MasterCard")
    }
}

// llamar las funciones de validator y unir a la funcion validar
const botonValidar = document.getElementById("VALIDAR");
const numero = document.getElementById("CreditCard");
const spanPalabra = document.getElementById("Palabra");

botonValidar.addEventListener("click", function(){
   let numberCard = parseInt(numero.value);

   let myFunc = num => Number(num);
  
   var intArr = Array.from(String(numberCard), myFunc)

   if (validator.isValid(intArr) == true){
    spanPalabra.innerHTML = "VÁLIDA, puedes continuar con tu pago"
    const numeroEnmascarado = validator.maskify(numero.value);
    numero.value = numeroEnmascarado;
   } else {
    spanPalabra.innerHTML = "INVÁLIDA, revise sus datos"
   }
   validator.maskify(intArr);
   
   console.log(validator.maskify(intArr));

})

let botonLimpiar = document.getElementById("LIMPIAR");
botonLimpiar.addEventListener("click", limpiar);

function limpiar (){
    location.reload();
}

// botonValidar.addEventListener("click", validator.maskify);