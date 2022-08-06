const crud = document.querySelector(".crud");
// const crudClose = document.querySelector(".crud-close");princewill
const crudOpen = document.querySelectorAll(".crud-open");

function openCrud(e) {
  e.classList.toggle("hidden");
}

crudOpen.forEach((open) => {
  open.addEventListener("click", function (e) {
    const target = e.target;

    openCrud(target.parentElement.nextElementSibling);
  });
});
