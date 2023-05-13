const tabs = (trigger, content, wrapper, beTheFirst) => {
    const btn = document.querySelectorAll(trigger);
    const tabs = document.querySelectorAll(content);
    const contentWrapper = document.querySelector(wrapper);
    const noPortfolio = document.querySelector(beTheFirst);

    btn.forEach(item => {
        item.addEventListener('click', () => {
            btn.forEach(btnItem => {
                btnItem.classList.remove('active');
            });

        item.classList.add('active');
        
        if (!item.classList.contains('grandmother') && !item.classList.contains('granddad')) {
            noPortfolio.style.display = 'none';
        } 

        switch (true) {
            case item.classList.contains('all'):
                tabs.forEach(tabsItem => {
                    tabsItem.style.display = 'none';
                    if(tabsItem.classList.contains('all')) {
                        tabsItem.classList.add('animated', 'fadeIn');
                        tabsItem.style.display = 'block';
                        
                        // contentWrapper.style.justifyContent = "space-around";
                    }
                });
                break;


            case item.classList.contains('lovers'):
            tabs.forEach(tabsItem => {
                tabsItem.style.display = 'none';
               
                if(tabsItem.classList.contains('lovers')) {
                    tabsItem.classList.add('animated', 'fadeIn');
                    tabsItem.style.display = 'block';
                    contentWrapper.style.justifyContent = "center";
                }
            });
            break;

            case item.classList.contains('chef'):
            tabs.forEach(tabsItem => {
                tabsItem.style.display = 'none';
                if(tabsItem.classList.contains('chef')) {
                    tabsItem.classList.add('animated', 'fadeIn');
                    tabsItem.style.display = 'block';
                    contentWrapper.style.justifyContent = "center";
                }
            });
            break;

            case item.classList.contains('girl'):
                tabs.forEach(tabsItem => {
                    tabsItem.style.display = 'none';
                    if(tabsItem.classList.contains('girl')) {
                        tabsItem.classList.add('animated', 'fadeIn');
                        tabsItem.style.display = 'block';
                        contentWrapper.style.justifyContent = "center";
                    }
                });
                break;

            case item.classList.contains('guy'):
                tabs.forEach(tabsItem => {
                    tabsItem.style.display = 'none';
                    if(tabsItem.classList.contains('guy')) {
                        tabsItem.classList.add('animated', 'fadeIn');
                        tabsItem.style.display = 'block';
                        contentWrapper.style.justifyContent = "center";
                    }
                });
                break;


            case item.classList.contains('grandmother'):
                tabs.forEach(tabsItem => {
                    tabsItem.style.display = 'none';
                noPortfolio.classList.add('animated', 'fadeIn');
                noPortfolio.style.display = 'block';
                });
                break;   
            
                case item.classList.contains('granddad'):
                    tabs.forEach(tabsItem => {
                        tabsItem.style.display = 'none';
                    noPortfolio.classList.add('animated', 'fadeIn');
                    noPortfolio.style.display = 'block';
                    });
                    break;   
                
        }


        });
    });
};

export default tabs;