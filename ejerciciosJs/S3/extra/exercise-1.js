const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul$$ = document.createElement('ul');

countries.forEach((country) => {
    let li$$ = document.createElement('li');
    li$$.textContent = country;
    ul$$.appendChild(li$$);
})

document.body.appendChild(ul$$);