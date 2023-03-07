let lis$$ = document.querySelectorAll('li');



let remove = (index) => {
    lis$$.forEach((li, i) => {
        if(index == i + 1 ) {
            li.remove();
        }
    })
}

let button$$ = document
    .querySelector('button')
    .addEventListener('click', remove);