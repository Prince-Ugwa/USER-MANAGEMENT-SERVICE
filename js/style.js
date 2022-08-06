const crud = document.querySelector(".crud");
const crudClose = document.querySelector(".crud-close");
const crudOpen = document.querySelectorAll(".crud-open");

function openCrud() {
  crud.classList.remove("hidden");
  crudOpen.classList.add("hidden");
}

crudOpen.forEach((open) => {
  open.addEventListener("click", openCrud);
});
