let pauseknapp = 1;
var button = document.getElementById("example-three");
button.addEventListener('click', function () {
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
    pauseknapp = 1;
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
    pauseknapp = 0;
  }
}, false);
