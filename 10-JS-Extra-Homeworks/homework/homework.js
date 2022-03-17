// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  return Object.entries(objeto) 
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

 let letterAmount = {} 
for (let i = 0; i < string.length; i++) {
  let letter = string[i];
  if(letterAmount[letter] !== undefined) {  
  letterAmount[letter]++
} else {letterAmount[letter] = 1
}
}
return letterAmount
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

// "soyHENRY" 

var mayusArr = s.match(/[A-Z]/g).join("") // "HENRY"
var minusArr = s.match(/[a-z]/g).join("") //"soy"
return mayusArr + minusArr 
}




function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí:
var nuevostr = "";
for (let i = str.length-1 ; i>=0 ; i--){
  nuevostr = nuevostr + str.charAt(i)
}
return nuevostr.split(" ").reverse().join(" ");
}

// str "Hola que tal"
// "lat euq aloH" 
// ["lat" , "euq" , "aloH"]
// ["aloH", "euq", "lat"]
// "aloH euq lat"


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
var numerostr = "" + numero
var nuevostr = ""
for (let i = numerostr.length -1 ; i >= 0 ; i--) {
  nuevostr = nuevostr + numerostr[i]
}if(numerostr === nuevostr) return "Es capicua"
return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  return cadena.replaceAll("a", "").replaceAll("b", "").replaceAll("c", "");

}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

var nuevoarr = arr.slice().sort((a,b) => a.length - b.length)

return nuevoarr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  // arr1 = [1,2,3,4,9] y arr2 = [3,7,8,1,2] => [1,2,3]

var nuevoArr = []

  for (let i = 0; i < arreglo1.length; i++) {
    let numero1 = arreglo1[i]
   if(arreglo2.includes(numero1)) nuevoArr.push(numero1)
    }
  return nuevoArr
  }




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

