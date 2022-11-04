// let numero = [CreditCard]
// let numero = [4,5,5,7,8,8,0,4,8,0,9,0,4,7,0,9]

const validator = {
  isValid: function (numero){
    //obtener el numero para validader -> usuario ()
    //let numero = [4,5,5,1,7,0,8,3,1,2,6,6,0,8,1,7]
    // Código Luhn
    let invertido = [ ];
    // invertir el orden del numero de tarjeta
    for (let i = 0; i <= (numero.length - 1); i++) {
      invertido[i] = numero[(numero.length -1) - i];
    }
    // console.log("numero invertido" + invertido)
    //let numberInvertido = number.reverse();
    // buscar ubicación par y multiplicarlo por 2, en caso de sr mayor a 9 se resta 10 y se suma 1(suma de los dígitos)
    let comprobacion = [];
    for (let i=0; i < numero.length; i++){
        if (i % 2 != 0) {
            comprobacion[i] = invertido[i] * 2
            if (comprobacion[i] > 9){
                comprobacion[i] = (comprobacion[i]-10) + 1
            }
        }
        else {
          comprobacion[i] = invertido[i]
        }
    }
    //Validación de la suma de los numeros en 10.
    let suma = 0;
    for (let i=0; i < numero.length; i++){
        suma = suma + comprobacion[i]}
    
      if (suma % 10 == 0){
        return true
    }
    else {
        return false
    }
  },

  maskify: function (numero){
    let mascara = [];
      for (var i = 0; i < numero.length; i++) {
        if (i < numero.length - 4){
         mascara[i]= "*"
      }
        else{
        mascara[i] = numero[i]
      }
      }
  return(mascara).join("");
}

}

// console.log(validator.isValid())
// console.log(validator.maskify())

export default validator;
