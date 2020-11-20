let bredde = 2 ** 10;
let høyde = 400;
let antall = 2 ** 8;
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

søyler = shufflearray(søyler);

function shufflearray(array) {
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
  let venstre;
  let høyre;
  let lengde = array.length;
  let midtpunkt = Math.floor(lengde / 2);
  let resultat;
  if (lengde <= 1) {
    return array;
  }
  venstre = merge_sort(array.slice(0, midtpunkt));
  høyre = merge_sort(array.slice(midtpunkt));
  resultat = merge(venstre, høyre);
  return resultat;
}

function merge(arr1, arr2) {
  let len1 = arr1.length;
  let len2 = arr2.length;
  let sortert = [];
  for (let i = 0; i < len1 + len2; i++) {
    if (arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] <= arr2[0]) {
        sortert.push(arr1[0]);
        arr1.shift();
      } else {
        sortert.push(arr2[0]);
        arr2.shift();
      }
    } else if (arr1.length > 0) {
      sortert.push(arr1[0]);
      arr1.shift();
    } else {
      sortert.push(arr2[0]);
      arr2.shift();
    }
  }
  return sortert;
}

søyler = merge_sort(søyler);
