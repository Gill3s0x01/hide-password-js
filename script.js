var state = false;

function toggle() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
    document.getElementById("bulb-wrapper").style.boxShadow = "0 0 0 0 #ffffff";
    document.getElementById("bulb-wrapper").style.backgroundColor = "#ffffff";

    state = false;
  } else {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("bulb-wrapper").style.boxShadow =
      "0 0 0 285px #ffffff";
    document.getElementById("bulb-wrapper").style.backgroundColor = "#ffff00";

    state = true;
  }
}
