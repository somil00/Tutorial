let fruitBtn = document.getElementById("fruits");
fruitBtn.addEventListener('click', fruitBtnHandler);

function fruitBtnHandler(){
    console.log("you clicked fruitbtn");
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://gist.githubusercontent.com/amlcurran/6d174c472e2523be5f9cad7092e1d7ab/raw/edfb73c8ade674f40bfff8f3dfed97d327c1abc1/fruits.json',true);

    xhr.onload = function(){
        if(this.status === 200){
            let obj = JSON.parse(this.responseText)
            let list = document.getElementById('fruitList');
            str="";
            for(key in obj){
                str+=`<li>${obj[key].name}</li>`
            }
            list.innerHTML = str;
    }
    else{
        console.log("error");
    }
}
   xhr.send();
}

let vegBtn = document.getElementById("vegetables");
vegBtn.addEventListener('click', vegBtnHandler);

function vegBtnHandler(){
    console.log("you clicked vegetable btn");
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://gist.githubusercontent.com/amlcurran/6d174c472e2523be5f9cad7092e1d7ab/raw/edfb73c8ade674f40bfff8f3dfed97d327c1abc1/fruits.json',true);

    xhr.onload = function(){
        if(this.status === 200){
            let obj = JSON.parse(this.responseText)
            let list = document.getElementById('vegList');
            str="";
            for(key in obj){
                str+=`<li>${obj[key].name}</li>`
            }
            list.innerHTML = str;
    }
    else{
        console.log("error");
    }
}
   xhr.send();
}