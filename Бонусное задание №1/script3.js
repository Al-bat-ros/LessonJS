// Задание 3
let num;
let sum = 0;

while (num !== 0){
    num = +prompt('Введи число: ');
    if (!Number.isNaN(num)){
        sum += num;
    }
          
}

if (num === 0){
    console.log('Итог: ', sum);
}
