let startСalc = document.getElementById('start'), //Получить кнопку "Начать расчет" через id
    valueBlocks = document.querySelectorAll('.result-table div[class*="value"'), //все блоки в правой части программы
    inputs = document.querySelectorAll('.expenses-item'), //поля(input) c обязательными расходами
    btns = document.querySelectorAll('button'), //кнопки через тэг
    approveBtnOne = btns[0], //Получить кнопки “Утвердить”
    approveBtnTwo = btns[1], //Получить кнопки “Утвердить”
    countBtn = btns[2], //“Рассчитать”
    optExpenses = document.querySelectorAll('.optionalexpenses-item'), //поля для ввода необязательных расходов

    //оставшиеся поля через querySelector
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearVal = document.querySelector('.year-value'),
    monthVal = document.querySelector('.month-value'),
    dayVal = document.querySelector('.day-value');