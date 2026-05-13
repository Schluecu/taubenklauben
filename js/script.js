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
  setTimeout(end, 400);
}

function end() {
  open("./erkundungstour/menu.html","_self");
}

const clusters = ["tauben", "schauen", "bäume", "uhren"];

function backwards() {
  x = clusters[3];
  z = clusters[0];

  document.getElementById(x).classList.remove('rechtsraus');
  document.getElementById(x).classList.add('linksraus');
  document.getElementById(x).classList.remove("off");
  document.getElementById(z).classList.add('rechtsraus');
  
  console.log(clusters);
  clusters.splice(0,0,x);
  clusters.splice(4,1);
  console.log(clusters);

  setTimeout(hinein, 20);
  setTimeout(forw, 1000);
}

function forwards() {
  
  y = clusters[1];
  z = clusters[0];

  document.getElementById(y).classList.remove('linksraus');
  document.getElementById(y).classList.add('rechtsraus');
  document.getElementById(y).classList.remove("off");
  document.getElementById(z).classList.add('linksraus');
  
  console.log(clusters);
  clusters.push(z);
  clusters.shift();
  console.log(clusters);
  
  setTimeout(hinein, 20);
  setTimeout(back, 1000);
}

function hinein() {
  y = clusters[0];
  textändern(y);
  document.getElementById(y).classList.remove('rechtsraus');
  document.getElementById(y).classList.remove('linksraus');
}

function back() {
  x = clusters[3];
  document.getElementById(x).classList.add("off");
}

function forw() {
  x = clusters[3];
  document.getElementById(x).classList.add("off");
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function randostart() {
  shuffle(clusters);
  var y = clusters[0];
  document.getElementById(y).classList.remove("off");
  textändern(y);
}

function textändern(y) {
  var seite = document.getElementById("navlist1");
  x = document.getElementById(y).getAttribute("content");
  console.log(x);
  seite.innerHTML = x;
}

function wiggle() {
  x = document.getElementById('weiss')
  y = document.getElementById('schöni')
  z = document.getElementById('werdt')
  console.log(x, y, z);
  x.style="transition:all .15s ;height:37vh;top:27.2vh;left:-5.5vw;";
  y.style="transition:all .2s ;height:62vh;top:25.5vh;;left:-.2vw;";
  z.style="transition:all .3s ;height:58vh;top:32.5vh;left:0.6vw;";
}

function unwiggle() {
  x = document.getElementById('weiss')
  y = document.getElementById('schöni')
  z = document.getElementById('werdt')
  console.log(x, y, z);
  x.style="height:37vh;top:27vh;left:-5vw;";
  y.style="height:62vh;top:25vh;";
  z.style="height:58vh;top:32vh;left:0.5vw;";
}

function klasse(klasse) {
  document.getElementById(klasse).classList.add(klasse);
}
