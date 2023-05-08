const modals = () => {
    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
             
                if (e.target) {
                    e.preventDefault();
                }
                btnPressed = true;
                if (destroy) {
                    item.remove();
                }
                
                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                  
                });

                modal.style.display = "block"; 
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
                

    
            });
            
        });

        



        close.addEventListener('click', () => {

            windows.forEach(item => {
                item.style.display = 'none';
                
            });

            modal.style.display = "none"; 
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
          

        });

        modal.addEventListener('click', (e) => {
            
            if(e.target === modal) {

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
               
            }
        });
    }
  
    function showModalByTime(selector,time) {
        setTimeout(function() {
            let display;
            document.querySelectorAll('[data-modal').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if (!display) {
                document.querySelector(selector).style.display = "block";
                document.body.style.overflow = "hidden";
                let scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
           
        }, time);
    
        
    }

///BLOCK NEXT STEP OF MODAL WINDOW

    // function blockedNextStep (modalWindow, btn, balconType, input, checkbox) {
    //     document.querySelector(modalWindow).querySelector(btn).setAttribute('disabled', 'true');
    //     let inputsFilled = false;

    //     const modal = document.querySelector(modalWindow);
    //     input = modal.querySelectorAll('.form-control');
    //     balconType = document.querySelectorAll('.balcon_icons');
    //     checkbox = modal.querySelectorAll('label');
    //     btn = modal.querySelector('.popup_calc_button');
        

    //     input.forEach(item => {
    //         item.addEventListener('input', function(e) {
    //             const value = e.target.value.trim();
    //           if(value.length > 0) {
    //             inputsFilled = true;
    //           } else {
    //             inputsFilled = false;
    //           }
    //           if(inputsFilled == true) {
    //             btn.removeAttribute('disabled');
    //         }
    //         });
           

    //     });

        
        
    // }
    ///---------------------------------------------------------------------------------
    ///BLOCK SECOND STEP OF MODAL WINDOW
    // function blockedSecondStep(checkbox, btn) {
      
    //     checkbox = document.querySelectorAll('label');
    //     btn = document.querySelector('.popup_calc_profile_button');
    //     btn.setAttribute('disabled', 'disabled');
       

    //     checkbox.forEach(item => {
    //         item.addEventListener('click', function() {
    //             btn.removeAttribute('disabled');
    //         });
    //     });
        
    // }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
            if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
    // showModalByTime('.popup-consultation', 5000);
    

   
};


export default modals; 