const crud = document.querySelector(".crud");
const crudClose = document.querySelector(".crud-close");
const crudOpen = document.querySelector(".crud-open");

crudOpen.addEventListener("click", function () {
  crud.classList.remove("hidden");
});

crudClose.addEventListener("click", function () {
  crud.classList.add("hidden");
});
