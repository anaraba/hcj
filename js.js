//gg e na david, domasno 3 postaveno na git e na viki

document.getElementById("ovde se pisuva idto na elementito").innerHTML; //innerHTML ja dava sozdinata na elementot, ako napiseme = togas kje ja smeni segasnata so toa sto kje naoiseme, bez ednakvo primer vo funkcija ili nesto samo ja dava sozdrzinata na elementot

//<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button> pristapvit do linkot na slikata i go postavuva na ovoj os on, znaci po default slikata e off, i so klik na on se nosi do dr slika so zapalena svetilka

//<img id="myImage" src="pic_bulboff.gif" style="width:100px">

//<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

/**Writing into an HTML element, using innerHTML.  znaci za da mu se smeni sodrzinata
Writing into the HTML output using document.write().        ova za na ekran da prikaze!!!!
Writing into an alert box, using window.alert().    ova e alert gore
Writing into the browser console, using console.log() */

//Using document.write() after an HTML document is loaded, will delete all existing HTML !!!! se brise ako se klikne na kopce primer i so toa treba da se prikaze nesto od doc write, se brise se prethodno
  //let e za da se koristi odnosno za da i se dade vrednost na promenlivata; vp ciklus moze samo let i var; najdobro raboti so var

  // Object:
const person = {firstName:"John", lastName:"Doe"};

//nizi i objekti so const se deklariraat

document.getElementById("demo").innerHTML = myArray; //ova e niza, a za objekt ne moze vaka treba imeto na objektot.promenlivite za objekypt ime prez ...
const myArray = Object.values(person); //vaka od objektot person se pisat site vo niza

//konstruktor so this
//<button onclick="this.innerHTML=Date()">The time is?</button>

document.getElementById(id).onclick = function(){code}	//Adding event handler code to an onclick event
//element.addEventListener(event, function, useCapture); event e click or mousedown;  function e sto ja povikuvame when the event occurs; 
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
  });

  