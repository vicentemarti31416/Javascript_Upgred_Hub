const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let volumes = [];

for(let user of users) { // Obenemos cada user del objeto users (el nombre user es inventado)
    for(let key in user) { // Recorremos el objeto user extreyendo cada key en cada iteración (name, favoriteSound)
        if(key.includes('favoritesSounds')) { // Si la key de ese bucle incluye es favoriteSound iteramos ese objeto
            for(let aux in user[key]) { //user[key] se refiere al objeto anterior, es como decir user['favoriteSound'], lo que haremos es recorrer sus atributos
                for(let prop in user[key][aux]) { // user[key][aux] representa el objeto favoriteSount y prop sus atributos (format, volume)
                    if(prop.includes('volume')) volumes.push(user[key][aux][prop]); // Si el atributo de ese bucle es volume, incluísmos su valor en el array volumes
                }
            }
        }
    }
}

let totalVolumes = 0;
volumes.forEach((volume) => totalVolumes += volume); // Vamos sumando todos los volumenes 

console.log(`La media de todos los volúmenes es ${totalVolumes / volumes.length}`); // Sacamos la media dividiendo el total por lo cantidad de volúmenes


