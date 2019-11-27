//hard-task-3.1

let str = 'урок-3-был слишком легким.';

let newStr = str[0].toUpperCase() + str.slice(1);
console.log(newStr);


//hard-task-3.2

let strTask2 = newStr.replace(/-/g,' ');
console.log(strTask2);

//hard-task-3.3

let strTask3 = strTask2.slice(19);
console.log(strTask3);

let newStrTask3 = strTask3.replace('им','о');

console.log(newStrTask3);

//hard-task-3.4

let arr = [20,33,1,"человек",2,3];

arr.splice(3,1);
console.log(arr);

for(let i = 0; i < arr.length; i++) {
  arr[i] = arr[i]**3;
}
console.log(arr);

let sumArr = arr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(sumArr);

let calcSumArr = (Math.sqrt(sumArr)).toFixed();

console.log(+calcSumArr);


//hard-task-3.5

function task3(str) {
  if(typeof(str) != "string") {
    alert("Ошибка, введена не строка");
  } else {
str = str.trim();
   if(str.length > 50) {
      console.log(str.slice(0,51) + "(...)");
      return;
    }
   console.log(str);
}
}

task3(" Hellow man, whats app)?  ");

task3("Метод trim удаляет пробелы по краям строки. Чаще всего это нужно при вводе пользователем каких-либо значений: он может случайно налепить лишних пробелов - и наша задача очистить введенный текст от них.");

