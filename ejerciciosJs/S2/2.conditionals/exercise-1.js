const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

alumns.forEach((alumn) => {
    let counter = 0;
    for (let key in alumn) {
        if (alumn[key] === true) counter++;  
        counter >= 2 ? alumn.isApproved = true : alumn.isApproved = false;
    }
})

alumns.forEach((alumn) => console.log(alumn));