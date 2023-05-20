
const drop = () => {
    //drag *
    //dragend *
    //dragenter - Объект над dropArea
    //dragexit *
    //dragleave - объект покидает пределы dropArea
    //dragover - объект зависает(находится) над dropArea
    //dragstart * 
    //drop  - объект отправлен в dropArea

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
   // При попадании в область drop`a подсвечиваем область
    function highLight(item) {
        item.closest('.file_upload').style.border = "5px solid yellow";
        item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0, .7";

    }
    // При выходе из области drop`a перестаем подсвечивать(меняем стили)
    function unHighLight(item) {
        item.closest('.file_upload').style.border = "none";

        if(item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = "#fff";
        } else {
            item.closest('.file_upload').style.backgroundColor = "#ededed";
        }

        
        

    }
    //Перебираем наши event`ы и паралельно перебираем все инпуты, навешиваем обработчик событий на каждый инпут и в случае совпадения обработчиков вызываем функцию highLight(ПОДСВЕТКА ИНПУТА) 
    
    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => highLight(input), false);
        });
    });
    //Перебираем наши event`ы и паралельно перебираем все инпуты, навешиваем обработчик событий на каждый инпут и в случае совпадения обработчиков вызываем функцию unHighLight(ПЕРЕСТАЁМ ПОДСВЕЧИВАТЬ ИНПУТ) 

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unHighLight(input), false);
        });
    });

        fileInputs.forEach(input => {
            input.addEventListener('drop', (e) => {
                input.files = e.dataTransfer.files; 
                

                let dots;
                const arr = input.files[0].name.split('.');
    
                if(arr[0].length > 6) {
                    dots = '...';
                } else {
                    dots = '.';
                }
                const name = arr[0].substring(0, 6) + dots + arr[1];
                input.previousElementSibling.textContent = name;
                
            });
        });

};

export default drop;