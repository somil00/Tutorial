//if user adds a note, add it to local storage
showNotes();


let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addSub = document.getElementById("addSub");
  let subject = localStorage.getItem("subject");
  if (subject == null) {
    subjectObj = [];
  } else {
    subjectObj = JSON.parse(subject);
  }
  subjectObj = subjectObj || [];
  subjectObj.push(addSub.value);
  localStorage.setItem("subject", JSON.stringify(subjectObj));
  addSub.value = "";

  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj = notesObj || [];
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});


// SHOW FUNCTION
function showNotes() {
  let subject = localStorage.getItem("subject");
  if (subject == null) {
    subjectObj = [];
  } else {
    subjectObj = JSON.parse(subject);
  }

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${subjectObj[index]}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    <button onclick="redNote(${index})" class="my-2 btn btn-primary">important Note</button>
                </div>
            </div>
                `;
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show!  Use " Add a note section`;
  }
}

// function to delete a note
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let subject = localStorage.getItem("subject");
  if (subject == null) {
    subjectObj = [];
  } else {
    subjectObj = JSON.parse(subject);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  subjectObj.splice(index, 1);
  localStorage.setItem("subject", JSON.stringify(subjectObj));
  showNotes();
}

// SEARCH BOX FILTER FUNCTION
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0];

    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

// IMPORTANT NOTE MARKING FUNCTION
function redNote(index){
  let sm = document.getElementsByClassName(noteCard);
  sm[index].style.color = "red";
}


/*
 feature that can be added-
 1. mark important
 2. search by title
 3. Login id kind of thing
 4. Sync and Host to a web server
*/
