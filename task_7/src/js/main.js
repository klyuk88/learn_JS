 //Получить кнопку "Начать расчет" через id
 let startСalc = document.getElementById('start'),

     //все блоки в правой части программы
     valueBlocks = document.querySelectorAll('.result-table div[class*="value"]'),
     budgetVal = valueBlocks[0],
     dayBudgetVal = valueBlocks[1],
     levelVal = valueBlocks[2],
     expensesVal = valueBlocks[3],
     optionalExpensesVal = valueBlocks[4],
     incomeVal = valueBlocks[5],
     monthSavingsVal = valueBlocks[6],
     yearSavingsVal = valueBlocks[7],

     //поля(input) c обязательными расходами
     expensesItems = document.querySelectorAll('.expenses-item'),


     //кнопки
     btns = document.querySelectorAll('button'),
     approveBtnOne = btns[0],
     approveBtnTwo = btns[1],
     countBtn = btns[2],

     //поля для ввода необязательных расходов
     optExpenses = document.querySelectorAll('.optionalexpenses-item'),


     //оставшиеся поля
     chooseIncome = document.querySelector('.choose-income'),
     savingsCheck = document.querySelector('#savings'),
     chooseSum = document.querySelector('.choose-sum'),
     choosePercent = document.querySelector('.choose-percent'),

     // дата
     yearVal = document.querySelector('.year-value'),
     monthVal = document.querySelector('.month-value'),
     dayVal = document.querySelector('.day-value');


 let money, time;

 startСalc.addEventListener('click', function () {

     btns.forEach(e => {
         e.removeAttribute('disabled');
         e.classList.remove('disable-style-btn');
     });

     time = prompt('Введите дату в формате YYYY-MM-DD', '');
     money = +prompt('Ваш бюджет на месяц?', '');

     while (isNaN(money) || money == "" || money == null) {
         money = +prompt('Ваш бюджет на месяц?', '');
     }
     appData.budget = money;
     appData.timeData = time;
     budgetVal.textContent = money.toFixed();
     yearVal.value = new Date(Date.parse(time)).getFullYear();
     monthVal.value = new Date(Date.parse(time)).getMonth() + 1;
     dayVal.value = new Date(Date.parse(time)).getDate();
 });


 // обязательные расходы

 let expensesItemsPrice = [expensesItems[1], expensesItems[3]];

 function addNumbers(inp) {
     inp.addEventListener('keypress', function (e) {
         if (e.key.match(/[a-zа-яёA-ZА-ЯЁ]/gi)) {
             e.preventDefault();
         }
     });
 }
 expensesItemsPrice.forEach(element => {
     addNumbers(element);
 });

 approveBtnOne.addEventListener('click', function () {
     let sum = 0;

     for (let i = 0; i < expensesItems.length; i++) {

         let a = expensesItems[i].value;
         let b = expensesItems[++i].value;

         if (a != '' && a != null && a.length < 20 && b != null) {
             appData.expenses[a] = b;
             sum += +b;
             expensesVal.textContent = sum;

         } else {
             i--;
         }

     }

 });
 //  необязательные расходы

 // проврека на латиницу
 function testOptExpenses(input) {
     input.addEventListener('keypress', function (e) {
         if (e.key.match(/\w/gi)) {
             e.preventDefault();
         }
     });
 }

 optExpenses.forEach(element => {
     testOptExpenses(element);
 });
 //  запись в поле справа
 approveBtnTwo.addEventListener('click', function () {
     optionalExpensesVal.textContent = '';
     for (let i = 0; i < optExpenses.length; i++) {

         let opt = optExpenses[i].value;

         appData.optionalExpenses[i] = opt;

         optionalExpensesVal.textContent += appData.optionalExpenses[i] + ' ';

     }
 });

 // расчет дневного бюджета
 countBtn.addEventListener('click', function () {

     if (appData.budget != undefined) {

         appData.dailyBudget = +(((appData.budget - expensesVal.textContent) / 30).toFixed());
         dayBudgetVal.textContent = appData.dailyBudget;
         switch (true) {
             case appData.dailyBudget < 500:
                 levelVal.textContent = 'Ваш достаток ниже среднего';
                 break;
             case appData.dailyBudget > 500 && appData.dailyBudget < 3000:
                 levelVal.textContent = 'Ваш достаток среднего уровня';
                 break;
             case appData.dailyBudget > 3000:
                 levelVal.textContent = 'Ваш достаток выше среднего';
                 break;
             default:
                 levelVal.textContent = 'Произошла ошибка в расчетах';
         }
     } else {
         dayBudgetVal.textContent = 'Произошла ошибка';
     }

 });

 //  статьи возможного дохода
 chooseIncome.addEventListener('input', function () {
     let items = chooseIncome.value;
     appData.income = items.split(', ');
     incomeVal.textContent = appData.income;
 });


 //Есть ли накопления
 savingsCheck.addEventListener('click', function () {
     if (appData.savings == true) {
         appData.savings = false;
     } else {
         appData.savings = true;
     }

 });

 chooseSum.addEventListener('input', function () {
     if (appData.savings == true) {
         let sum = +chooseSum.value,
             percent = +choosePercent.value;

         appData.mounthIncome = +((sum / 12 / 100 * percent).toFixed(1));
         appData.yearIncome = +((sum / 100 * percent).toFixed(1));

         monthSavingsVal.textContent = appData.mounthIncome;
         yearSavingsVal.textContent = appData.yearIncome;

     }
 });

 choosePercent.addEventListener('input', function () {
     if (appData.savings == true) {
         let sum = +chooseSum.value,
             percent = +choosePercent.value;

         appData.mounthIncome = +((sum / 12 / 100 * percent).toFixed(1));
         appData.yearIncome = +((sum / 100 * percent).toFixed(1));

         monthSavingsVal.textContent = appData.mounthIncome;
         yearSavingsVal.textContent = appData.yearIncome;

     }
 });


 let appData = {
     budget: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     savings: false
 };