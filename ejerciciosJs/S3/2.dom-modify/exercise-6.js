const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let ul$$ = document.createElement('ul');

apps.forEach((app, index) => {
    let li$$ = document.createElement('li');
    li$$.textContent = apps[index];
    ul$$.appendChild(li$$);
})

document.body.appendChild(ul$$);