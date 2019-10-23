'use strict';

let money = prompt('Ваш месячный доход?'); 
let income = 'Фриланс'; 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); 
let deposit = confirm('Есть ли у вас депозит в банке?'); 
let mission = 1000; 
let question1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question3 = prompt('Во сколько это обойдется?');
let question4 = prompt('Во сколько это обойдется?');
let budgetManth = money - question1 - question2;
let target = Math.ceil(mission / budgetManth);
let budgetDay = Math.floor((budgetManth / 30));


if (budgetDay >= 800) {
        сonsole.log('Высокий уровень дохода');
        
} else if (budgetDay >= 300 && budgetDay < 800) {
        console.log('Средний уровень дохода');

} else if (budgetDay >= 0 && budgetDay < 300) {
        console.log('Низкий уровень дохода');

} else if (budgetDay < 0) {
        console.log('Что то пошло не так');
}


console.log(addExpenses.toLowerCase().split());
console.log(deposit);
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log('доход за месяц: ' + budgetManth);
console.log('Будет достигнута цель за ' + target + ' Мeсяца');
console.log('бюджет на день: ' + budgetDay);

