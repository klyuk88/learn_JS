// Задание 1
let hour = new Date().getHours(),
    minutes = new Date().getMinutes(),
    seconds = new Date().getSeconds(),
    day = new Date().getDate(),
    month = new Date().getMonth() + 1,
    year = new Date().getFullYear();


console.log(hour + ':' + minutes + ':' + seconds + ' ' + day + '.' + month + '.' + year);


// Задание 2

function addZero() {
    let arrDate = [hour,minutes,seconds,day,month,year];
    for (let i = 0; i < arrDate.length; i++) {
        arrDate[i] = '' + arrDate[i];
        if (arrDate[i].length == 1) {
            arrDate[i] = '0' + arrDate[i];
        }
    }
    console.log( arrDate[0] + ':' + arrDate[1] + ':' + arrDate[2] + ' ' + arrDate[3] + '.' + arrDate[4] + '.' + arrDate[5]);
}


addZero();


// Задание 3
function nameDay() {
    let dayName = new Date().toLocaleString("ru", {
        weekday: 'long'
    });
    
    console.log(dayName);
}

nameDay();

// Задание 4
let inputs = document.querySelectorAll('input'),
    dateOne = inputs[0],
    dateTwo = inputs[1],
    calcBtn = document.querySelector('#calc-btn'),
    result = document.querySelector('.result-value');


    calcBtn.addEventListener('click',function () {

        if (dateOne.value != '' && dateTwo != '') {
            dateOne = new Date( Date.parse(dateOne.value));
            dateTwo = new Date( Date.parse(dateTwo.value));
            result.textContent = (Math.floor((dateOne - dateTwo) / 86400000)) + ' дней';
        } else {
            result.textContent = 'Заполните поля';
        }

        
     });

       


 