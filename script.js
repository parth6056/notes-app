const notesContainer = document.querySelector(".notes-container");
const Btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-Box");

Btn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-Box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "Assests/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    upStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-Box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        upStorage();
      };
    });
  }
});

function upStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function getStorage() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
getStorage();
