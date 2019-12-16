// Добавляем пятый пункт меню
let list = document.querySelector('.menu');
let newLi = document.createElement('li');
newLi.classList.add('menu-item');
newLi.innerHTML = 'Пятый пункт';
list.appendChild(newLi);

// Изменяем порядок пунктов меню
let liCollection = document.querySelectorAll('.menu-item');
liCollection[1].innerHTML = 'Второй пункт';
liCollection[2].innerHTML = 'Третий пункт';

// Меняем фон у body
document.querySelector('body').style.cssText = 'background-image: url("../task_6/img/apple_true.jpg")';

//  Меняем заголовок
document.querySelector('#title').innerHTML ='Мы продаем только подлинную технику Apple';

// Удаляем баннер с рекламой

// document.querySelector('.adv').style.cssText = 'display: none';

// или

let parentBadMarketing = document.querySelectorAll('.column');
let badMarketing = document.querySelector('.adv');
parentBadMarketing[1].removeChild(badMarketing);


let appleAsk = prompt('Как вы относитесь к технике Apple?','');
document.querySelector('.prompt').innerHTML = appleAsk;
