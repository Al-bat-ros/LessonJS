//alert('Hello world!!!');
console.log('Hello world');

let money = 1000; 
let income = 'Фриланс'; 
let addExpenses = 'Eда, Бензин, Спортзал'; 
let deposit = true; 
let mission = 100000000; 
let period = 5;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(income.length);
console.log('"'+'Период' + ' ' + period + ' ' + 'месяцев'+'"' );
console.log(`"Цель заработать ${mission}$ долларов"`);
console.log(addExpenses.toLowerCase().split());

let budgetDay = money / 30;

console.log(budgetDay)
console.log((money % 30))