const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

let names = cities
            .filter((city) => city.isVisited === true)
            .map((city) => city.name += ' (Visitado)');

console.log(names);