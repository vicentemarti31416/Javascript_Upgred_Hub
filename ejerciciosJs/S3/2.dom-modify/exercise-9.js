let divs$$ = document.querySelectorAll('.fn-insert-here');
divs$$.forEach((div) => {
    let p$$ = document.createElement('p');
    p$$.textContent = 'Voy dentro!';
    div.appendChild(p$$);
})