window.addEventListener('DOMContentLoaded',function () { 
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');



    function hideTabContent(a) { 
        for (let index = a; index < tabContent.length; index++) {
            tabContent[index].classList.remove('show');
            tabContent[index].classList.add('hide');   
        }
     }

     hideTabContent(1);



     function showTabContent(b) { 
       if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show'); 
       }

      }

      info.addEventListener('click', function (event) {
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
    

 });