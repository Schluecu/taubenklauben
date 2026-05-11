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

function enhance(detail) {
  var x = document.getElementById(detail+'_detail');
  if (x.classList.contains("on")){
    x.classList.remove("on");
    x.classList.add("off");
  } else {
    x.classList.add("on");
    x.classList.remove("off");
  }
}

function menu() {
  var x = document.getElementById('menu');
  var y = document.getElementById('main');
  var z = document.getElementById('logo');
  var a = document.getElementById('navlist1');
  var b = document.getElementById('navlist2');
  if(x.classList.contains("menuon")) {
    x.classList.remove("menuon");
    y.style.display="flex";
    z.classList.remove('big');
    a.classList.remove('off');
    b.classList.add('off');
    document.getElementById('aufführung').style.visibility="visible";
  } else {
    x.classList.add("menuon");
    y.style.display="none";
    z.classList.add('big');
    a.classList.add('off');
    b.classList.remove('off');
    document.getElementById('aufführung').style.visibility="hidden";
  }
}

function killswitch() {
  if (document.getElementById("control").classList.contains("on")) {
  for (elem of document.getElementsByClassName("img")) {
    elem.classList.remove("on");
    elem.classList.add("off");
  }} else {for (elem of document.getElementsByClassName("img")) {
    elem.classList.remove("off");
    elem.classList.add("on");
  }}
}

function start() {
  document.getElementById("logo").classList.remove("grösser");
  document.getElementById("eingang").style.transform="scale(2)";
  document.getElementById("uhr").style.top="-20vmax";
  document.getElementById("uhr").style.left="-30vmax";
  document.getElementById("uhr").style.width="20vw";
  document.getElementById("taube").style.left="-30vw";
  document.getElementById("taube").style.width="30vw";
  setTimeout(end, 500);
}

function end() {
  document.getElementById("start").style="display:none";
  open("./about.html","_self");
}
