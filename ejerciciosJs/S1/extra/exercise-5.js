const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];

let totalVentas = 0;

products.forEach((product) => totalVentas += product.sellCount);

console.log('La media de las ventas es de -> ' + totalVentas / products.length);