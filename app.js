let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    screen.value += e.target.dataset.num;
  });
});

equal.addEventListener("click", function (e) {
  if (screen.value !== "") {
    let answer = eval(screen.value);
    screen.value = answer;
  }
});
clear.addEventListener("click", function () {
  screen.value = "";
});
