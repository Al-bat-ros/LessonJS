//Задание 2
let year1 = +prompt('Введи начальный год',1980);
let year2 = +prompt('Введи конечный год', 2019);
let yourMin;
let yourMax;

if (year1 > year2){
    yourMin = year2; 
    yourMax = year1;
} else {
    yourMin = year1; 
    yourMax = year2;
} 

for (let i = yourMin; i < yourMax; i++){
    if (i % 4 == 0 && i % 100!= 0 || i % 400 == 0){
        console.log(i);
    }
}