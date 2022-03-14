function Car (marca, modelo, año, color){
    this.marca = marca  || "Volkswagen";  //default operator si es que no le paso un valor entonces se tiene un valor por defecto
    this.modelo = modelo || "3000"; // this no retorna nada aquí
    this.año = año || "1968";
    this.color = color || "azul";
}

var audi = new Car("Audi", 1500, 1978, "verde");


audi.kilometraje="10000 km";

console.log(audi)
// keyword new

// Var objeto = {};
// Car ('audi', 1500, 'verde').bind(objeto) ; // bind, el this de la funcion CAR tiene que ser objeto. 
// return objeto;


var persona1 = {
    edad: 23, 
    getEdad: function(){   //misma función
        return this.edad
    }
}

var persona2 = {
    edad: 16, 
    getEdad: function(){
        return this.edad
    }
}

var persona3 = {
    edad: 7, 
    getEdad: function(){
        return this.edad
    }
}

function Persona (edad){
    this.edad = edad;
}

Persona.prototype.getEdad = function (){
   return this.edad;
}

var juan = new Persona (23);
var juancho = new Persona (16);
var juanito = new Persona (7);











