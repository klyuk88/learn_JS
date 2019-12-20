 //Получить кнопку "Начать расчет" через id
let startСalc = document.getElementById('start'),

 //все блоки в правой части программы
    valueBlocks = document.querySelectorAll('.result-table div[class*="value"'),
    budgetVal = valueBlocks[0],
    dayBudgetVal = valueBlocks[1],
    levelVal = valueBlocks[2],
    expensesVal = valueBlocks[3],
    optionalExpensesVal = valueBlocks[4],
    incomeVal = valueBlocks[5],
    monthSavingsVal = valueBlocks[6],
    yearSavingsVal = valueBlocks[7],

    //поля(input) c обязательными расходами
    inputs = document.querySelectorAll('.expenses-item'),


    //кнопки через тэг
    btns = document.querySelectorAll('button'), 
    approveBtnOne = btns[0], 
    approveBtnTwo = btns[1],
    countBtn = btns[2],

    //поля для ввода необязательных расходов
    optExpenses = document.querySelectorAll('.optionalexpenses-item'),


    //оставшиеся поля
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearVal = document.querySelector('.year-value'),
    monthVal = document.querySelector('.month-value'),
    dayVal = document.querySelector('.day-value');