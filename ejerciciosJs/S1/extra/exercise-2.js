const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

foodSchedule.forEach((food) => {
	food.isVegan? console.log(food.name + ' is vegan!') : food.name = fruits.pop(); food.isVegan = true;
});

fruits.forEach((fruit) => console.log('The fruit is -> ' + fruit));
foodSchedule.forEach((food) => console.log('The food name is -> ' + food.name + ' and isVegan = ' + food.isVegan)); 