let menu = document.querySelector(".menu");

menu.addEventListener("click", (e) => {
  let element1 = document.querySelector(".triangle");
  let element2 = document.querySelector(".expand");
  element1.classList.toggle("op0");
  element2.classList.toggle("op0");
});
