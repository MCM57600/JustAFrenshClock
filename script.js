function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  document.getElementById("time").innerHTML = "" + h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

startTime();
// ********************************************
// script.js
document.addEventListener("DOMContentLoaded", function () {
  const colorButtons = document.querySelectorAll(".color-button");

  colorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const color = button.getAttribute("data-color");

      // Réinitialise toutes les couleurs
      document.body.classList.remove(
        "rouge",
        "bleu",
        "jaune",
        "noir",
        "blanc",
        "violet"
      );

      // Applique la couleur sélectionnée au body
      document.body.classList.add(color);
    });
  });

  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    document.getElementById("time").innerHTML = "" + h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  startTime();
});
