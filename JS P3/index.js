console.log("This is index.js")
//d9968755a9a64c22993290fd16751d89


let accordionExample = document.getElementById('accordionExample');

const xhr = new XMLHttpRequest;
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=d9968755a9a64c22993290fd16751d89`, true);

xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        console.log(json);
        let newHTML = "";
        let articles = json.articles;
        articles.forEach(function(element,index) {
            let news = `<div class="card">
                             <div class="card-header" id="heading${index}">
                               <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                   <b>${index+1}.</b>  <span class="badge badge-secondary">${element["title"]}</span>
                                   
                                   </button>
                                 </h2>
                              </div>

                              <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionExample">
                              <div class="card-body">
                              ${element["description"]}. To Read More , click here- <a href = "${element['ur']} target="_blank" >Read more</a></div>
                             </div>
                        </div>`;
            newHTML += news;
        });
        accordionExample.innerHTML = newHTML;
    }
    else{
        console.log("Some error occured");
    }
}

xhr.send();
