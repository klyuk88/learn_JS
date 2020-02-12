window.addEventListener('DOMContentLoaded', () => {

    function req(filter) {

        getResource("http://localhost:3000/cars")
            .then(data => createCard(data,filter))
            .catch(err => console.error(err));
    }

    function allCards() {

        getResource("http://localhost:3000/cars")
            .then(data => allCard(data))
            .catch(err => console.error(err));
    }

    allCards();

    async function getResource(url) {
        const res = await fetch(`${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }
    let row = document.querySelectorAll('.row');

    function createCard(response, filter) {
        response.forEach(item => { 
            let card = document.createElement('div');
            card.classList.add('col-md-6');
            if (item.category == filter) {
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
                 //добавляем html с данными в блок, каждый раз в конец
                row[1].appendChild(card);
            }

        });
    }

    function allCard(response) {
        response.forEach(item => { 
            let card = document.createElement('div');
            card.classList.add('col-md-6');
           
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
                 //добавляем html с данными в блок, каждый раз в конец
                row[1].appendChild(card);
            

        });
    }

    let filterName = document.querySelectorAll('.country li');

    filterName[0].addEventListener('click', () => {
        row[1].innerHTML = '';
        allCards();
    });


    for (let i = 1; i < filterName.length; i++) {
        
        let t = filterName[i].getAttribute('data-category');
        filterName[i].addEventListener('click', function() {
            row[1].innerHTML = '';
            req(t);
        });

    }

});