let showValue = (event) => console.log(event); 

let input$$ = document
.querySelector('input')
.addEventListener('focus', showValue)

