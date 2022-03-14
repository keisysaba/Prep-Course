function Car (marca, modelo, año, color){
    this.marca = marca  || "Volkswagen";  //default operator
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












