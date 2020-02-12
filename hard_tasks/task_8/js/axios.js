window.addEventListener('DOMContentLoaded', () => {

    function req() {
        
        getResource("http://localhost:3000/cars")
            .then(data => createCard(data.data))
            .catch(err => console.error(err));
    }

    req();
    
    async function getResource(url) { 
        const res = await axios(`${url}`);
        if (res.status !== 200) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return res;
     }

    function createCard(response){
        response.forEach(item => {  //проходим по массиву и вытаскиваем данные из каждого элемента параллельно создаем html для вывода данных на клиенте
            let card = document.createElement('div');
            card.classList.add('col-md-4');
            card.innerHTML = `
            <div class="card">
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
    }
});