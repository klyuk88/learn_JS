let num = 33721;
let numStr = num.toString();

// Произведение цифр
let compositionNum = numStr[0]*numStr[1]*numStr[2]*numStr[3]*numStr[4];
console.log(compositionNum);


// Возведение в степень по ES7
let numDegreeEs7 = compositionNum**2;
console.log(numDegreeEs7);

// Вывод на экран части строки
document.write('<h1>'+ numDegreeEs7.toString().slice(0,2) + '</h1>');



