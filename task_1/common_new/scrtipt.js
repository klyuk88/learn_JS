let money = prompt('Ваш бюджет на месяц?', '');

let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let mandatoryExpenses = prompt('Введите обязательную статью расходов в этом месяце', '');
let howMuch = prompt('Во сколько обойдется?', '');

let appData = {
     budget: money,
     timeData: time,
     expenses: {
        mandatoryExpenses: howMuch
     },
     optionalExpenses: {

     },
     income: [],
     savings: false
};

console.log(appData.budget/30);

alert(appData.budget/30);
