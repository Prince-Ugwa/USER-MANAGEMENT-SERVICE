const crud = document.querySelector(".crud");
// const crudClose = document.querySelector(".crud-close");princewill
const crudOpen = document.querySelectorAll(".crud-open");


const openCrud = (e) => e.classList.toggle("hidden");
 

for (const open of crudOpen) {
  open.addEventListener("click", (e) => {
    const target = e.target;

    openCrud(target.parentElement.nextElementSibling);
  });
}
