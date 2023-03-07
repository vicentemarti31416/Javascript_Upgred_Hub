let ul$$ = document.querySelector('ul');

let removeLast = () => {
    let li$$ = ul$$.lastChild;
    li$$.remove();
}

let button$$ = document
    .querySelector('button')
    .addEventListener('click', removeLast);