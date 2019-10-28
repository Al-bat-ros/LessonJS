function start(){
    
    // генератор случайного числа
    let rand = function(){
    return Math.round(Math.random() * (100 - 1) + 1);
    }
    let con = rand();
    console.log(con);
    let num;
    let again;
    
  // блок сравнения
    let comparison = function(num){
        if (num < con){
            console.log(num);
            alert('Больше!');    
        } else if (num > con){
            alert('Меньше!');     
        } else if (num === con){
            alert('Поздравляю вы угадали!!!');
            again = confirm('Хотите сыграт еще раз: '); 
            again ? start() : alert('До свидани!(( '); 
        } 
    };

// Запрос чисел
    while (num !== con){

        num = +prompt('Угадай число от 1 до 100: ');
        if (num === 0){
            alert('До свидани!(( ');
            break;
        }
        comparison(num);
        if (!Number.isNaN(num)){

            while (num !== con){
                num = +prompt('Попробуй еще раз: ');
                if (num === 0){
                    alert('До свидани!(( ');
                    break;
                }
                comparison(num);
            }
        } else {
            alert('Введите число!!!');
        }
       
        
    }
}
start();
