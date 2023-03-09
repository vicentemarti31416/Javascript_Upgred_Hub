const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let query = '';

let gamers = [];

let guardarQuery = (event) => query = event.target.value;

let mostrarStreamers = (event) => {
    gamers = streamers.filter((streamer) => streamer.name.includes(query));
    console.log(gamers)
};

document.querySelector('input').addEventListener('blur', guardarQuery);

document.querySelector('button').addEventListener('click', mostrarStreamers)


