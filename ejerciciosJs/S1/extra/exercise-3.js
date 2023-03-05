const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

let corta = [];
let media = [];
let larga = [];

movies.forEach((movie) => {
    movie.durationInMinutes < 100 ? corta.push(movie) : movie.durationInMinutes >= 100 && movie.durationInMinutes < 200 ? media.push(movie) : larga.push(movie);
});

corta.forEach((movie) => console.log('La película -> ' + movie.name + ' es corta'));
media.forEach((movie) => console.log('La película -> ' + movie.name + ' es media'));
larga.forEach((movie) => console.log('La película -> ' + movie.name + ' es larga'));