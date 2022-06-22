let input = document.getElementById('display');
let buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        // buttonText = e.target.innerText; 
        buttonText = e.;
        console.log('button is', buttonText);
        // if(buttonText == "X"){
        //     buttontext = '*';
        //     inputValue += buttonText;
        //     input.value = inputValue;
        // }
        // else if (buttonText == 'C'){
        //     inputValue = "";
        //     input.value = inputValue;
        // }
        // else if (buttonText == '='){
        //    inputValue = eval(screenValue);
        // }
        // else {
        //     inputValue += buttonText;
        //     input.value = inputValue;
        // }
    })

}