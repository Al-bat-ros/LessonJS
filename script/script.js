'use strict';

let money = +prompt('Ваш месячный доход?'); 
let income = 'Фриланс'; 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); 
let deposit = confirm('Есть ли у вас депозит в банке?'); 
let mission = 1000; 
let question1 = +prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question2 = +prompt('Какие обязательные ежемесячные расходы у вас есть?');
let question3 = prompt('Во сколько это обойдется?');
let question4 = prompt('Во сколько это обойдется?');
let budgetManth = money - question1 - question2;
let budgetDay = Math.floor((budgetManth / 30));

//возвращает сумму всех расходов за месяц
function getExpensesMonth() {
        return question1 + question2;
}

//возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth() {
        return Math.floor(money - getExpensesMonth());
}
let accumulatedMonth = getAccumulatedMonth();

// за какой период достигнута цель
function getTargetMonth() { 
        return Math.floor(mission / accumulatedMonth);
}

console.log('сумму всех расходов за месяц: '+ getExpensesMonth());
console.log('Накопления за месяц: '+ getAccumulatedMonth());
console.log('Цель в ' + mission + ' рублей' + ' будет достигнута за ' + getTargetMonth() + ' м.' );

// уровень дохода
let getStatusIncome = function() {

        if (budgetDay >= 800) {
                return 'Высокий уровень дохода';
                
        } else if (budgetDay >= 300 && budgetDay < 800) {
                return'Средний уровень дохода';

        } else if (budgetDay >= 0 && budgetDay < 300) {
                return 'Низкий уровень дохода';

        } else if (budgetDay < 0) {
                return 'Что то пошло не так';
        }
};
console.log(getStatusIncome());


 let showTypeOf = function(date){
         console.log(date, typeof(date));
 };


console.log(addExpenses.toLowerCase().split());
console.log(deposit);
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log('бюджет на день: ' + budgetDay);

