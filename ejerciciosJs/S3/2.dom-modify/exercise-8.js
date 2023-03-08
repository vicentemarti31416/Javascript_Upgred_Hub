let p$$ = document.createElement('p');
p$$.textContent = 'Voy en medio!'; 
let div1$$ = document.querySelector('div'); 
let parent$$ = div1$$.parentNode;
parent$$.insertBefore(p$$, div1$$.nextSibling);