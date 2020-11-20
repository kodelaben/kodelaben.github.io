let bredde = 2 ** 5;
let høyde = 400;
let antall = 2 ** 3;
let søyler = [];
let buffer = 2;
let linjebredde = bredde / antall;

function setup() {
  var canvas = createCanvas(bredde, høyde);
  canvas.parent("canvasForHTML");
}

function draw() {
  background(0);
  for (let i = 0; i < antall; i++) {
    stroke("red");
    strokeWeight(linjebredde);
    line(
      linjebredde * søyler[i] + buffer,
      height,
      linjebredde * søyler[i] + buffer,
      height - i
    );
  }
}

for (let i = 0; i < antall; i++) {
  søyler.push(i);
}

søyler = shuffle(søyler);

function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function merge_sort(array) {
  let lengde = array.length;
  let midtpunkt = Math.floor(lengde / 2);
  if (lengde <= 1) {
    return array;
  } else {
    dummyvenstre = array
    dummyvenstre = array.slice(0, midtpunkt);
    dummyhøyre = array.slice(midtpunkt);
    venstre = merge_sort(dummyvenstre);
    høyre = merge_sort(dummyhøyre);
  }
  let resulatet_sortert = [];
  for (let i = 0; i < lengde; i++) {
    if (venstre.length > 0 && høyre.length > 0) {
      if (venstre[0] <= høyre[0]) {
        resulatet_sortert.push(venstre[0]);
        venstre.splice(0, 1);
      } else {
        resulatet_sortert.push(høyre[0]);
        høyre.splice(0, 1);
      }
    } else if (høyre.length == 0) {
      resulatet_sortert.push(venstre[0]);
      venstre.splice(0, 1);
    } else {
      resulatet_sortert.push(høyre[0]);
      høyre.splice(0, 1);
    }
  }
  return resulatet_sortert;
}

søyler = merge_sort(søyler);
