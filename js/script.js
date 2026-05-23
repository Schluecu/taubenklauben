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
  var c = document.getElementById('mapwrap');
  if(x.classList.contains("menuon")) {
    x.classList.remove("menuon");
    y.style.display="flex";
    z.classList.remove('big');
    a.classList.remove('off');
    b.classList.add('off');
    c.classList.remove('disappeared');
    document.getElementById('aufführung').style.visibility="visible";
  } else {
    x.classList.add("menuon");
    y.style.display="none";
    z.classList.add('big');
    a.classList.add('off');
    b.classList.remove('off');
    c.classList.add('disappeared');
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
  document.getElementById("karte1").style.animation="";
  document.getElementById("karte1").style.right="-25vw";
  document.getElementById("karte2").style.animation="";
  document.getElementById("karte2").style.right="-100vw";
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
  seite.innerHTML = x;
}

function wiggle() {
  x = document.getElementById('mweiss')
  y = document.getElementById('mschöni')
  z = document.getElementById('mwerdt')
  x.style="transition:all .15s;height:64%;top:48.5%;transform:translate(-78%, -50%);";
  y.style="transition:all .2s;height:125.5%;top:45.5%;width:25vw;transform:translate(-51%, -50%);@media only screen and (orientation:portrait){width:47%;}";
  z.style="transition:all .3s;height:99%;top:53.5%;transform:translate(-47.5%, -50%)";
}

function unwiggle() {
  x = document.getElementById('mweiss')
  y = document.getElementById('mschöni')
  z = document.getElementById('mwerdt')
  x.style="height:65%;top:48%;transform:translate(-75%, -50%)";
  y.style="height:125%;top:45%;width:25vw;@media only screen and (orientation:portrait){width:47%;}";
  z.style="height:98%;top:53%;transform:translate(-48%, -50%)";
}

function klassen(klasse) {
  document.getElementById(klasse).classList.add(klasse);
}

function uhrenwahl(uhr) {
  öffnen = "./uhren.html?"+uhr;
  console.log(öffnen);
  open(öffnen, "_self");
}

function uhrenzuteilung(klasse) {
  const text = window.location.toString();
  let result = text.split("?")[1];
  const value = "../Bilder/Uhren/pieces/"+result+".png";
  document.getElementById('seitenuhr').setAttribute("src", value.toString());
  klassen(klasse);
  document.getElementById(result).classList.remove('disappeared');
}

function shift(){
  document.getElementById('geschaut1').style="height:40vh;top:-13vh;left:-23vw;transform:rotate(1deg);";
  document.getElementById('geschaut2').style="height:40vh;top:-4vh;left:-15vw;transform:rotate(-2deg);";
  document.getElementById('geschaut3').style="height:40vh;top:-7vh;left:-20vw;transform:rotate(-.5deg);";
}

function unshift(){
  document.getElementById('geschaut1').style="height:40vh;top:-10vh;left:-22vw;";
  document.getElementById('geschaut2').style="height:40vh;top:-6vh;left:-18vw;";
  document.getElementById('geschaut3').style="height:40vh;top:-7vh;left:-20vw;";
}

function inhalt() {
  document.getElementById('inhaltsgefäss').classList.add('on');
}

function tick() {
  var rand1 = Math.random()*75+15;
  var rand2 = Math.random()*60+20;
  var rand3 = Math.random()*10+5;
  const style = "top:"+rand1+"vh; right:"+rand2+"vw; animation:slowintro "+rand3+"s;";
  document.getElementById('tik1').style="";
  void document.getElementById('tik1').offsetWidth;
  document.getElementById('tik1').style=style.toString();
}

function notick() {
  zack = document.getElementById('tik1').classList;
  if (zack.contains('disappeared')){
    document.getElementById('tik1').classList.remove('disappeared');
  } else {
    document.getElementById('tik1').classList.add('disappeared');
  }
}

function appear(toappear) {
  document.getElementById(toappear).classList.remove('disappeared');
}

function disappear(toappear) {
  document.getElementById(toappear).classList.add('disappeared');
}

function unclick(unclick) {
  document.getElementById(unclick).onclick="";
  document.getElementById(unclick).classList.remove('pointer');
}

function plaintext(goal) {
  document.getElementById(goal).classList.add('plaintext');
}

function unreflektiert() {
  appear('unreflektiert');
  appear ('Stern');
}

function unred(tounred) {
  document.getElementById(tounred).classList.remove('red');
}

function spacerheight(target, height){
  document.getElementById(target).style="height:"+height+";";
}

function aufführung() {
  if (document.getElementById('aufführung').classList.contains('disappear')) {
    document.getElementById('aufführung').classList.remove('disappear');
  } else {document.getElementById('aufführung').classList.add('disappear');}
}

function schlagworte() {
  const text = window.location.toString();
  let result = text.split("?")[1];
  document.getElementById(result).classList.add('centerpiece');
  document.getElementById(result).classList.remove('schlagwort');
  document.getElementById(result).style="";
  setTimeout(cent, 400)
}

function cent() {
  document.getElementsByClassName('centerpiece')[0].style.transition="none";
}

function swv(wort) {
  document.getElementById(wort).style="top:"+(Math.random()*60+20)+"%;left:"+(Math.random()*60+18)+"%;";
  setTimeout(swvc, 500);
}

function swvc() {
  schlagworte = document.getElementsByClassName('schlagwort');
  for (let i = 0; i < schlagworte.length; i++) {
    schlagworte[i].style="top:"+(Math.random()*60+20)+"%;left:"+(Math.random()*60+18)+"%;transition:left 30s linear, top 30s linear;";
  swvct();
  }
}

function swvct() {
  setInterval(swvc, 30000);
}

function pathex() {
  path('wiederholung','ticken');
  path('erkundungstour','ticken');
  path('baeume','gschauen');
  path('multisensorisch','baeume');
  path('details','gschauen');
  path('details','verbindungen');
  path('wiederholung','anhaenger');
  path('anhaenger','forschung');
  path('erkundungstour','verbindungen');
}

function path(el1, el2) {
  var b1 = document.getElementById(el1).getBoundingClientRect();
  var b2 = document.getElementById(el2).getBoundingClientRect();

  var b1l = b1.left + b1.width/2;
  var b1t = b1.top + b1.height/2;
  var b2l = b2.left + b2.width/2;
  var b2t = b2.top + b2.height/2;

  var newLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  newLine.setAttribute('id', 'line1');

  newLine.setAttribute('x1', b1l);
  newLine.setAttribute('y1', b1t);
  newLine.setAttribute('x2', b2l);
  newLine.setAttribute('y2', b2t);

  idname = el1.toString() +"&" + el2.toString();
  newLine.setAttribute('id', idname);
  newLine.setAttribute('class', 'line');
  document.getElementById('fullsvg').append(newLine);
}

function updateline() {
  line = document.getElementsByClassName('line');
  for (let i=0;i<line.length; i++) {
    lin = line[i];

    el1 = lin.getAttribute('id').split('&')[0];
    el2 = lin.getAttribute('id').split('&')[1];

    var b1 = document.getElementById(el1).getBoundingClientRect();
    var b2 = document.getElementById(el2).getBoundingClientRect();

    var b1l = b1.left + b1.width/2;
    var b1t = b1.top + b1.height/2;
    var b2l = b2.left + b2.width/2;
    var b2t = b2.top + b2.height/2;
    

    lin.setAttribute('x1', b1l);
    lin.setAttribute('y1', b1t);
    lin.setAttribute('x2', b2l);
    lin.setAttribute('y2', b2t);
  }
  updateupdate();
}

function updateupdate() {
  setTimeout(updateline, 16);
}

function map(punkt) {
  open("./grundriss.html?"+punkt, "_self");
}

function mapp() {
  map1 = document.getElementsByClassName('mapp')[0];
  map2 = document.getElementsByClassName('mapp')[1];
  console.log(map1);
  map1.classList.add('navi');
  map2.classList.add('navi');
  map1.style="right:20%;top:22%";
  map2.style="right:50%;top:22%";
}
