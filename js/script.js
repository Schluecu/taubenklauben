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
  y.style="transition:all .2s;height:80%;top:55%;transform:translate(-76%, -50%);@media only screen and (orientation:portrait){width:47%;}";
  z.style="transition:all .3s;height:99%;top:53.5%;transform:translate(-47.5%, -50%)";
}

function unwiggle() {
  x = document.getElementById('mweiss')
  y = document.getElementById('mschöni')
  z = document.getElementById('mwerdt')
  x.style="height:65%;top:48%;transform:translate(-75%, -50%)";
  y.style="height:80%;top:55%;transform:translate(-75%, -50%);@media only screen and (orientation:portrait){width:47%;}";
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

function taubenerschein() {
  detailpunkte();
  setTimeout(taubenerscheinen, 1500);
}

function detailpunkte() {
  swvdot('barbe'); swvdot('schoeni'); swvdot('wyttenbach'); swvdot('engel'); swvdot('steiger1'); swvdot('steiger2'); swvdot('unbekannt'); swvdot('lerber'); swvdot('kunsthandel');
}

function taubenerscheinen() {
  appear('taubeweiss'); appear('taubediesbach');
}

function bildvergrössern() {
  setTimeout(vergrössern, 7000);
}

function vergrössern() {
  klassen('rechtsactivated');
  klassen('linksactivated');
  setTimeout(appeardetails, 1000);
  taubenerschein();
}

function appeardetails() {
  appear('detaildiesbach');
  appear('detailweiss');
}

function uhrenzuteilung(klasse) {
  const text = window.location.toString()+"/";
  let split = text.split("?")[1];
  let result = "Uhr2"
  try{result = split.split("/")[0];}catch{}
  console.log(result);
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

function disappearschautext(toappear) {
  document.getElementById(toappear).style.zIndex="-1000";
  document.getElementById(toappear).style.bottom="-20vh";
  setTimeout(disappear.bind(null, toappear), 200);
}

function appearschautext(toappear) {
  appear(toappear);
  document.getElementById(toappear).style.bottom="-57vh";
  setTimeout(frontschautext.bind(null, toappear), 300)
}

function frontschautext(toappear) {
  document.getElementById(toappear).style.zIndex="0";
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

function aufführung(ide) {
  if (document.getElementById(ide).classList.contains('disappeared')) {
    document.getElementById(ide).classList.remove('disappeared');
  } else {document.getElementById(ide).classList.add('disappeared');}
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
    schlagworte[i].style="top:"+(Math.random()*60+20)+"%;left:"+(Math.random()*60+18)+"%;transition:left 50s linear, top 50s linear;";
  }
  setInterval(swvc, 50000);
}

function swvdot(wort) {
  document.getElementById(wort).style="top:"+(Math.random()*100)+"%;left:"+(Math.random()*80+5)+"%;";
  setInterval(swvcdot, 1);
}

function swvcdot() {
  schlagworte = document.getElementsByClassName('dotmother');
  for (let i = 0; i < schlagworte.length; i++) {
    schlagworte[i].style="top:"+(Math.random()*100)+"%;left:"+(Math.random()*80+5)+"%;transition:left 40s linear, top 40s linear;";
  }
  swvctdot();
}

function swvctdot() {
  setInterval(swvcdot, 40000);
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
  let map1 = document.getElementsByClassName('mapp')[0];
  let map2 = document.getElementsByClassName('mapp')[1];
  console.log(map1);
  map1.classList.add('navi');
  map2.classList.add('navi');
  map1.style="right:20%;top:22%";
  map2.style="right:50%;top:22%";
}

function rotpunkt() {
  let punkt = window.location.toString().split("?")[1];
  document.getElementById(punkt).classList.add('red');
}

function karteweiter(link, i, j, k, l , m, n, o, p, q, r) {
  if(r!=undefined){open('./'+link+'/'+i+'/'+j+'/'+k+'/'+l+'/'+m+'/'+n+'/'+o+'/'+p+'/'+q+'/'+r, target="_self");}else{
    if(q!=undefined){open('./'+link+'/'+i+'/'+j+'/'+k+'/'+l+'/'+m+'/'+n+'/'+o+'/'+p+'/'+q, target="_self");}else{
      if(p!=undefined){open('./'+link+'/'+i+'/'+j+'/'+k+'/'+l+'/'+m+'/'+n+'/'+o+'/'+p, target="_self");}else{
        if(o!=undefined){open('./'+link+'/'+i+'/'+j+'/'+k+'/'+l+'/'+m+'/'+n+'/'+o, target="_self");}else{
          if(n!=undefined){open('./'+link+'/'+i+'/'+j+'/'+k+'/'+l+'/'+m+'/'+n, target="_self");}else{
            if(m!=undefined){open('./'+link+'/'+i+'/'+j+'/'+k+'/'+l+'/'+m, target="_self");}else{
              if(l!=undefined){open('./'+link+'/'+i+'/'+j+'/'+k+'/'+l, target="_self");}else{
                if(k!=undefined){open('./'+link+'/'+i+'/'+j+'/'+k, target="_self");}{
                  if(j!=undefined){open('./'+link+'/'+i+'/'+j, target="_self");}else{
                    if(i!=undefined){open('./'+link+'/'+i, target="_self");}else{
                      open('./'+link+'.html?Uhr6', target="_self");
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function weiterkarte() {
  //try{
    let link = window.location.toString().split("?")[1];
    let i = link.split("/")[1];
    let j = link.split("/")[2];
    let k = link.split("/")[3];
    let l = link.split("/")[4];
    let m = link.split("/")[5];
    let n = link.split("/")[6];
    let o = link.split("/")[7];
    let p = link.split("/")[8];
    let q = link.split("/")[9];
    let r = link.split("/")[10];
    if(i!=undefined){document.getElementById(i).classList.remove('disappeared');};
    if(j!=undefined){document.getElementById(j).classList.remove('disappeared');};
    if(k!=undefined){document.getElementById(k).classList.remove('disappeared');};
    if(l!=undefined){document.getElementById(l).classList.remove('disappeared');};
    if(m!=undefined){document.getElementById(m).classList.remove('disappeared');};
    if(n!=undefined){document.getElementById(n).classList.remove('disappeared');};
    if(o!=undefined){document.getElementById(o).classList.remove('disappeared');};
    if(p!=undefined){document.getElementById(p).classList.remove('disappeared');};
    if(q!=undefined){document.getElementById(q).classList.remove('disappeared');};
    if(r!=undefined){document.getElementById(r).classList.remove('disappeared');};
    console.log(document.getElementById(i));
    document.getElementById(i).scrollIntoView({behaviour:"smooth"});
  //} catch {return}
}

var schau = 1;
var zind = 0;
let schauenen = ('schauen'+schau).toString();
let schauenenen = ('text'+schauenen).toString();
let working = false;
function schauen() {
  if (working==true) {return} else {
  working = true;
  disappearschautext(schauenenen);
  document.getElementById(schauenen).style.top="0vh";
  document.getElementById(schauenen).style.transform="rotate(3deg)";
  setTimeout(schauenzwei,300);}
}

function schauenzwei() {
  zind--;
  document.getElementById(schauenen).style.zIndex=zind;
  setTimeout(schauenzweihalb,100)
}

function schauenzweihalb() {
  document.getElementById(schauenen).style.top="10vh";
  document.getElementById(schauenen).style.transform="rotate(0deg)";
  setTimeout(schauendrei, 300)
}

function schauendrei() {
  if (schau==12 ){schau=1}else{schau++;}
  schauenen = ('schauen'+schau).toString();
  schauenenen = ('text'+schauenen).toString();
  schauenenen = (schauenenen).toString();
  document.getElementById(schauenen).style.zIndex="3";
  appearschautext(schauenenen);
  working=false;
}

function schauenschluss() {
  disappear('schauenbox');
  appear('auswahl');
}

const skizzen = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var i = 1;

function rauf() {
  document.getElementById('seitenschauen').setAttribute('src', '../Bilder/Skizzen/'+skizzen[i]+'.png');
  if(i==1){i=11;}else{i--;}
}

function runter() {
  document.getElementById('seitenschauen').setAttribute('src', '../Bilder/Skizzen/'+skizzen[i]+'.png');
  if(i==11){i=0;}else{i++;}
}

function quotes() {
  const id = [];
  let quellen = document.getElementsByClassName('fussnote');
  for (var i=0; i<quellen.length; i++) {
    id[i] = quellen[i].id.split('-')[0];
    try {
    height = document.getElementById(id[i]).getBoundingClientRect().top-document.getElementById('main').getBoundingClientRect().y-20;
    quellen[i].style.transform = 'translate(0, '+height.toString()+'px)';
    } catch {console.log(quellen[i].id+' geht nicht');}
  }
}

function bildnachweis(beschreibung) {
  beschreibung = beschreibung+'-note';
  if (document.getElementById(beschreibung).style.display == "block") {
    document.getElementById(beschreibung).style.display = "none";
  } else {document.getElementById(beschreibung).style.display = "block";}
}