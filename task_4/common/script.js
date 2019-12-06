let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

}

start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {

            let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            let b = +prompt('Во сколько обойдется?', '');
    
            if (a != '' && a != null && a.length < 20 && b != null) {
                appData.expenses[a] = b;
    
                break;
            } else {
                alert('Вы допустили ошибку, попробуйте еще раз');
                i--;
            }
    
        }
    },
    detectDayBudget: function(){
        appData.dailyExpense = +((money / 30).toFixed());
    alert("Ваш дневной бюджет:" + appData.dailyExpense + "руб");
    },
    detectLevel: function () {
        switch (true) {
            case appData.dailyExpense < 500:
                alert('Ваш достаток ниже среднего');
                break;
            case appData.dailyExpense > 500 && appData.dailyExpense < 3000:
                alert('Ваш достаток среднего уровня');
                break;
            case appData.dailyExpense > 3000:
                alert('Ваш достаток выше среднего');
                break;
            default:
                alert('Произошла ошибка в расчетах');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.mounthIncome = +((save / 12 / 100 * percent).toFixed());
            alert("Ваш доход с депозита:" + appData.mounthIncome + " руб.");
    
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let y = prompt("Статья необязательных расходов?");
            if (typeof (y) != "string" || y == null || y == "") {
                i--;
            } else {
                appData.optionalExpenses[i] = y;
            }
            
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет доп доход?(Укажите через запятую)','');

        if (items != null && items != '' && isNaN(+items) ) {
            appData.income = items.split(', ');
            let itemsMore = prompt('Может что-то еще?', '');
            if (itemsMore != null && itemsMore != '' && isNaN(+itemsMore)) {
                appData.income.push(itemsMore);
        appData.income.sort();
            } else {
                alert("Ошибка!"); 
            }
        } else {
            alert("Ошибка!");
        }

        console.log('Ваши способы заработка:');
        appData.income.forEach(function (elem, index) {
            console.log(++index + ': ' + elem); 
        });
    }
};

appData.chooseIncome();


console.log('Наша программа включает в себя данные:');
for (const key in appData) {
 console.log(appData[key]);

}



