let bredde = 2**10;
let høyde = 400;
let antall = 2 ** 8;
let søyler = [];
let buffer =2;
let linjebredde = bredde/antall;


function setup() {
    var canvas = createCanvas(bredde, høyde);
    canvas.parent("canvasForHTML");
}

function draw() {
    background(0);
    for (let i = 0; i< antall; i++)
    {
        stroke("red");
        strokeWeight(linjebredde);
        line(linjebredde*søyler[i]+buffer, height, linjebredde*søyler[i] + buffer, height-i);
    }
}

for (let i = 0; i < antall; i++){
    søyler.push(i);
}

søyler = shuffle(søyler);

function shuffle(array) {
    var m = array.length, t, i;
  
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

