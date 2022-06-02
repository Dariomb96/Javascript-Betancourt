alert('elegi numero A y numero B para sumarse repetidas veces hasta llegar a 500')
const i = parseInt(prompt('Numero A'));
const p = parseInt(prompt('Numero B'));
let c = 0;
let cantit = 0;

for (let r = 0 ; r <= 250; r++) {
    if (c < 500) {
        c = c + (i + p);
        console.log(c);
    }
    else{
        cantit = r;
        break;
    }
}
let j = parseInt(prompt('Cuantas veces se repitio la operacion?'));
if (j == cantit){
    alert('Lo diste todo')
}else{
    alert('Te caiste')
}
console.log('la operacion se realizo ' + cantit + ' veces');
console.log('tu respuesta: ' + j);
console.log("Fin del programa");

//cantit = cantidad de iteraciones
