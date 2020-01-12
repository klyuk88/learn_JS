let inpRub = document.querySelector('#rub'),
    inpUsd = document.querySelector('#usd');

inpRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type','application/json', 'charset = utf-8');
    request.send();

    request.addEventListener('readystatechange', () => { 
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);
            inpUsd.value = (inpRub.value / data.usd).toFixed(2);
        }  else {
            inpUsd.value = 'Ошибка';
        }

     });


});