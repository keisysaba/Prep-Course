function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
var i = 0
    do {
      i++
      numero = numero + 5
    } while (i <= 8);

  return numero
}

console.log(doWhile(290))