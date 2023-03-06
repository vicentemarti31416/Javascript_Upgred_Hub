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

for(let user of users) {
    for(let key in user) {
        if(key.includes('favoritesSounds')) {
            for(let aux in user[key]) {
                for(let prop in user[key][aux]) {
                    if(prop.includes('volume')) volumes.push(user[key][aux][prop]);
                }
            }
        }
    }
}

let totalVolumes = 0;
volumes.forEach((volume) => totalVolumes += volume);

console.log(`La media de todos los volúmenes es ${totalVolumes / volumes.length}`);


