let textos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

let findArrayIndex = (array, text) => { 
    if(array.includes(text)) {
        return array.indexOf(text) 
    }
}

let deleteElement = (array, index) => { 
    if(index !== undefined) array.splice(index, 1);    
};

deleteElement(textos, findArrayIndex(textos, 'Ajolote'));

console.log(`array textos -> ${textos}`);
