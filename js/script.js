function bildbeschreibung(desc) {
  var x = document.getElementById(desc);
  if (x.classList.contains("on")) {
    x.classList.remove("on");
    x.classList.add("off");
  } else {
    x.classList.add("on");
    x.classList.remove("off");
  }
}
