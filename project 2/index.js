function Book(name,author,type){
 this.name = name;
 this.author = author;
 this.type = type;

}

//display constructor
function Display(){

}

//Add methods to Display prototype
Display.prototype.add = function(book){
    console.log("adding to ui");
    tableBody = document.getElementById('tableBody');
    let uistring = `
    <tr> 
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;
    tableBody.innerHtml += uistring;
}

//implementing the clear function
Display.prototype.clear = function(){
   let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//implementing the validate function
Display.prototype.validate = function(book){
   if(book.name.length<2 || book.author.length<2){
       return false;

   }
   else{
       return true;
       
   }
}
Display.prototype.show = function(type,displayMessage){
let message = document.getElementById('message');
message.innerHtml = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message:</strong>${displayMessage} 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`
        setTimeout(() => {
            message.innerHTML = ''
        }, 2000);
}



//Add Submit event listener
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(){
    let name = document.getElementById('bookName').Value;
    let author = document.getElementById('author').Value;
    let fiction = document.getElementById('fiction').Value;
    let programming = document.getElementById('programming').Value;
    let cooking = document.getElementById('cooking').Value;
    let type;
    if (fiction.checked){
        type = fiction.value;
        
    }
    else if (programming.checked){
        type = programming.value;
        
    }
    else if (cooking.checked){
        type = cooking.value;
        
    }
    else if (programming.checked){
        type = fiction.value;
        
    }
    let book = new book(name,author,type);
    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','Your book is added successfully')
    }
    else{
        display.show('danger', ' sorry you can not add this book')
    }
    
    
    
    e.preventDefault();  //To prevent Page to reload
}