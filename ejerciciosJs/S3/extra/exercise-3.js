let div$$ = document.querySelector('[data-function="printHere"]');
let ul$$ = document.createElement('ul');

for(let i = 0; i < 10; i++) {
    let li$$ = document.createElement('li');
    ul$$.appendChild(li$$);
}
div$$.appendChild(ul$$);
document.body.appendChild(div$$);

