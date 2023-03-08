const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

let categories = [];
let uniques = [];


for(let movie of movies) { // Recorre el array movies y en cada vuelta se dispone de un objeto movie 
    categories = categories.concat(movie.categories); // Obtenemos el array categories, lo concatenamos con lo que ya tiene y se lo volvemos a meter 
}; // El método concat "aplana" el array en un array de strings, si no, tendríamos un array de arrays, uno por cada objeto movie

categories.forEach((category) => { // Recorremos el array categories y obtenemos cada objeto en el
    if(!uniques.includes(category)) uniques.push(category); // Si cada category (string) no está incluído en el array uniques se mete dentro de ese array
});

uniques.forEach((category) => console.log(category));