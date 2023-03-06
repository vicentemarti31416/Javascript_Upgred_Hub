let textos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];


let findArrayIndex = (array, text) => { if(array.includes(text)) {
    return `El texto ${text} está en la posición ${array.indexOf(text)} del array`
} else{
    return 'El texto indicado no se encuentra en el array'
}};

console.log(findArrayIndex(textos, 'Ajolote'));




function index(array, text) {
    if(array.includes(text)) {
        return "El índice es " + array.indexOf(text)
    }
}

console.log(index(textos, 'Caracol'))