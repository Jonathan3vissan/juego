const leer = require ("prompt-sync")();
let eleccionUsuario = " def"
const WIN = 5

console.log("intene adivindar el numero secreto");
console.log("pruebe suerte, ingrese un numero");



for (let i = 1; i < 4; i++) {

    eleccionUsuario = leer();

    if (WIN==eleccionUsuario) {
        console.log("bienn te felicito");
         i = (4);
        
    }

    else {
        

        console.log("intento numero",i);
        }
   
} 
