function sumaTodos(array){
    var suma = array[0]
    for (let i = 0; i <= array[1]; i++){
        suma = suma + 1  
    }
return suma
}

sumaTodos([3,10])

function checkInventario(inventario,item){ 
    return inventario.find((e)=> e.nombre.toString().toLowerCase()===item.toString().toLowerCase())?.cantidad || 0; 
}

console.log(checkInventario([{nombre:"tenedor", cantidad: 6} , {nombre: "cuchara" , cantidad : 7}] , "tenedor"))