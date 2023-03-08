const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

[a, b, c, ...resto] = colors;
let copy = [a, b, ...resto];

console.log(copy);
