let p$$ = document.createElement('p');
p$$.textContent = 'Voy en medio!'; //sp1
let div1$$ = document.querySelector('div'); //sp2
let parent$$ = div1$$.parentNode;
parent$$.insertBefore(p$$, div1$$.nextSibling);