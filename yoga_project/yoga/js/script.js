window.addEventListener('DOMContentLoaded', function () {
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
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours
        };
    };



    let setClock = (id, endtime) => {
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

    setClock('timer', deadline);



    //  модальное окно
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    let tabsBtn = document.querySelectorAll('.description-btn');

    let openModal = (btn) => {
        btn.addEventListener('click', () => {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    };

    tabsBtn.forEach(element => {
        openModal(element);
    });


    //Form

    let form = document.querySelectorAll('form');

    form.forEach(element => {
        element.addEventListener('submit', (e) => {
            e.preventDefault();
            let input = element.querySelectorAll('input'),
                statusMessage = document.createElement('div'),
                message = {
                    loading: 'Загрузка...',
                    sacces: 'Успешно',
                    fail: 'Ошибка'
                };

            element.appendChild(statusMessage);


            let request = new XMLHttpRequest();

            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');


            let formData = new FormData(element);
            let obj = {};

            formData.forEach((value, key) => {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);
            request.send(json);

            let promise = new Promise(function (resolve, reject) {
                request.addEventListener('readystatechange', () => {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();

                    }
                });

            });

            promise
                .then(() => {
                    statusMessage.innerHTML = message.sacces;
                }).then(() => {
                    statusMessage.innerHTML = message.sacces;
                }).catch(() => {
                    statusMessage.innerHTML = message.fail;
                }).then(() => {
                    for (let index = 0; index < input.length; index++) {
                        input[index].value = '';
                    }
                });

        });

    });

    // end form

    // slider


    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);


    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }


        slides.forEach(item => {
            item.style.display = 'none';
        });

        dots.forEach(item => {
            item.classList.remove('dot-active');
        });

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');

    }

    function plusSlides(n) {
        showSlides(slideIndex = slideIndex + n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let index = 0; index < dots.length + 1; index++) {
            if (event.target.classList.contains('dot') && event.target == dots[index - 1]) {
                currentSlide(index);
            }
        }
    });
});