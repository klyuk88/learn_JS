let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');


let appData = {
    budget: money, 
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.dailyExpense = money/30;

// Цикл while 
// let i = 0;
// while (i < 2) {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//     let b = +prompt('Во сколько обойдется?', '');
   
//     if (a != '' && a != null && a.length < 20 && b != null) {
//         appData.expenses[a] = b;
//         console.log(appData);
        
//         break;
//     } else {
//         alert('Вы допустили ошибку, попробуйте еще раз');
//     }
//     i++;
// }

// Цикл do...while 
// let i = 0;
// do {
//     let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//     let b = +prompt('Во сколько обойдется?', '');
       
//         if (a != '' && a != null && a.length < 20 && b != null) {
//             appData.expenses[a] = b;
//             console.log(appData);
            
//             break;
//         } else {
//             alert('Вы допустили ошибку, попробуйте еще раз');
//         }
//   i++;
// } while (i < 2);



for (let i = 0; i < 2; i++) {

    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = +prompt('Во сколько обойдется?', '');
   
    if (a != '' && a != null && a.length < 20 && b != null) {
        appData.expenses[a] = b;
        console.log(appData);
        break;
    } else {
        alert('Вы допустили ошибку, попробуйте еще раз');
    }

}
 

switch (true) {
    case appData.dailyExpense < 500:
        document.write('<h2>Ваш достаток ниже среднего</h2>');
        break;
    case appData.dailyExpense > 500 && appData.dailyExpense < 3000 :
        document.write('<h2>Ваш достаток среднего уровня</h2>');
        break;
    case appData.dailyExpense > 3000:
        document.write('<h2>Ваш достаток выше среднего</h2>');
        break;
    default:
        alert('Произошла ошибка в расчетах, перезагрузите страницу и попробуйте еще раз.');    
}

  
