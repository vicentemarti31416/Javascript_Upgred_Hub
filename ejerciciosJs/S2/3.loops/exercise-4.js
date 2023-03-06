let toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 41, name: 'El gato felix'}
]

for(const [index, toy] of toys.entries()) toys = toys.filter((toy) => !toy.name.includes('gato'));

toys.forEach((toy) => console.log(toy));
