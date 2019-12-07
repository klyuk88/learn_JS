// Я понял так, спросить сколько массивов помесить в arr потом в каждый из этих массивов поместить рандомные числа и найти сумму чисел всего главного массива

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = [];


function massTask() {
    let ask = +prompt('Сколько массивов включить в arr?');

for (let i = 0; i < ask; i++) {
    arr[i] = [rand(1,5),rand(1,5),rand(1,5),rand(1,5)];
    // не нашел другого способа поместить несколько произвольных чесел в массив. Этот способ считаю ручной какой то.
}

console.log(arr);

// Нахожу сумму чисел каждого массива в главном массиве
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
    
}

console.log(arr);

// Нахожу сумму чисал главного массива
let sumArr = arr.reduce(function(sum, elem) {
    return sum + elem;
}, 0);

console.log(sumArr);
}

massTask();