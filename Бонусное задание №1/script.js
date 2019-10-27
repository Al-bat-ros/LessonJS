//Задача №1
let num1;
let num2;

while (num1 === 0 || num1 === '' || isNaN(num1)){
    num1 = +prompt('Введите первое число :  ');
}
while (num2 === 0 || num2 === '' || isNaN(num2)){
    num2 = +prompt('Введите второе число :  ');
}
    if (num1 > num2){
        console.log('Первое число больше второго');
    } else if (num1 < num2){
        console.log('Второе число больше первого');
    } else if (num1 == num2){
        console.log('Числа равны');
    }