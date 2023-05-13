import forms from "../modules/forms";

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);
          
          
      
        sizeBlock.setAttribute('name', 'size');
        materialBlock.setAttribute('name', 'material');
        optionsBlock.setAttribute('name', 'options');
        promocodeBlock.setAttribute('name', 'promocode');
        
      
 
        

 



    // formData.append('size', sizeBlock.value);
    // formData.append('material', materialBlock.value);
    // formData.append('options', optionsBlock.value);
    // formData.append('promocode', promocodeBlock.value);


   
 
       
      
    let summ = 0;
    const calcFunction = () => {
        summ = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
       


        if(sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины!";
        } else if (promocodeBlock.value === 'IWANPOPART') {
            resultBlock.textContent = Math.round(summ * 0.7);
        } else {
            resultBlock.textContent = summ;
        }
        
     
    };
    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    promocodeBlock.addEventListener('input', calcFunction);

   

};




export default calc;