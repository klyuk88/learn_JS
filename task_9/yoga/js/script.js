window.addEventListener('DOMContentLoaded',function () { 
    'use strict';

    // Табы

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    // функция которая скрывает все табы кроме 1го
    let hideTabContent = (a) => { 
        for (let index = a; index < tabContent.length; index++) {
            tabContent[index].classList.remove('show');
            tabContent[index].classList.add('hide');   
        }
     };

     hideTabContent(1);


     // функция которая показывает таб с индексом вместо b
     let showTabContent = (b) => { 
       if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
       }

      };
    //   при клике на таб запускаем цикл по всем табам и сверяем каждый таб с тем табом на который кликнули если они равны то скрываем все табы а таб который равен по тому на который кликнули показываем
      info.addEventListener('click', (event) => {
          let target = event.target;
          if (target && target.classList.contains('info-header-tab')) {
              for (let index = 0; index < tab.length; index++) {
                  if (target == tab[index]) {
                    hideTabContent(0);
                    showTabContent(index);
                    break;
                  }
                  
              }
          }
      });
    // табы конец


    //Timer

    let deadline = '2020-01-12';

    let getTimeRemining = (endtime) => {
        let t = Date.parse(endtime) - new Date(),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor(t/(1000*60*60));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    };

   

    let setClock = (id,endtime) => {
        let timer = document.getElementById('timer'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemining(endtime);
            if (t.total <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            } else {
                for (const key in t) {
                    t[key] = '' + t[key];
                    if (t[key].length == 1) {
                        t[key] = '0' + t[key];
                    }
                   
                }
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            }
            
        }

        
    };

    setClock('timer',deadline);



//  модальное окно
let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

more.addEventListener('click',function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click',() => {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});


let tabsBtn = document.querySelectorAll('.description-btn');

let openModal = (btn) => {
    btn.addEventListener('click',() => { 
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
     });
};

tabsBtn.forEach(element => {
    openModal(element);
});





 });



