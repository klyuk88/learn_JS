window.addEventListener('DOMContentLoaded', () => {

    function req() {
        const request = new XMLHttpRequest(); //инициируем объет XMLHttpRequest
        request.open("GET","http://localhost:3000/cars"); //создаем запрос GET или POST
        request.setRequestHeader("Content-type","application/json","charset=utf-8"); //настраиваем запрос
        request.send(); //отправляем
        request.addEventListener('load', function () { //событие для отслеживания статуса запроса
            if ( request.status == 200 ) { //если положительный то
                let data = JSON.parse(request.response); //получаем данные в формате lson и парсим их в объект, получаем массим в объектами
                console.log(data);
                data.forEach(item => {  //проходим по массиву и вытаскиваем данные из каждого элемента параллельно создаем html для вывода данных на клиенте
                    let card = document.createElement('div');
                    card.classList.add('col-md-4');
                    card.innerHTML = `
                    <div class="card" style="width: 18rem;">
                    <img src="${item.img}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.description}</p>
                      <h5 class="price">${item.price}</h5>
                      <p class="m-0">Производитель</p>
                      <h5 class="category">${item.category}</h5>
                      <a href="#" class="btn btn-primary">Переход куда-нибудь</a>
                    </div>
                  </div>`;
                  document.querySelector('.row').appendChild(card); //добавляем html с данными в блок, каждый раз в конец
                });
                

            } else {
                console.error("Что-то пошло не так");
                
            }
        });
    }
    req();
});