let bredde = 2 ** 10;
let høyde = 400;
let potens = 8;
let antall = 2 ** potens;
let søyler = [];
let buffer = 2;
let linjebredde = bredde / antall;
let counter = 0;
let referencearray = [];
let sorteringsarray = [];
let antallSammenligninger = antall / 2;

function setup() {
  var canvas = createCanvas(bredde, høyde);
  canvas.parent("canvasForHTML");
  frameRate(30);
}

function draw() {
  background(0);
  tegnsøyler();
}

function tegnsøyler() {
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




for (let i = 0; i < antall; i++) {
  søyler.push(i);
}
søyler = shufflearray(søyler);

for (let i = 0; i < antall; i++) {
  dummyarray = [søyler[i]];
  referencearray.push(dummyarray);
}
sorteringsarray.push(referencearray);

function create_merged_array(listoflists, listlength) {
  let dummyarray = [];
  for (let j = 0; j < listlength/2; j++) {
    dummyarray.push(merge(listoflists[2 * j], listoflists[2 * j + 1]));
  }
  return dummyarray;
}


function create_merging_history()
{
    for (let i = 0; i < potens; i++)
    {
        sorteringsarray.unshift(create_merged_array(sorteringsarray[0], sorteringsarray[0].length));
    }
}

function merge(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;
    let sortert = [];
    let indeksvenstre = 0;
    let indekshøyre = 0;
    for (let i = 0; i < len1 + len2; i++) {
      if (arr1.length - indeksvenstre > 0 && arr2.length-indekshøyre > 0) {
        if (arr1[indeksvenstre] <= arr2[indekshøyre]) {
          sortert.push(arr1[indeksvenstre]);
          indeksvenstre ++;
        } else {
          sortert.push(arr2[indekshøyre]);
          indekshøyre ++;
        }
      } else if (arr1.length - indeksvenstre > 0) {
        sortert.push(arr1[indeksvenstre]);
        indeksvenstre ++;
      } else {
        sortert.push(arr2[indekshøyre]);
        indekshøyre;
      }
    }
    return sortert;
  }

create_merging_history();










































































// function merge_sort(array) {
//     let venstre;
//     let høyre;
//     let lengde = array.length;
//     let midtpunkt = Math.floor(lengde / 2);
//     let resultat;
//     if (lengde <= 1) {
//       return array;
//     }
//     venstre = merge_sort(array.slice(0, midtpunkt));
//     høyre = merge_sort(array.slice(midtpunkt));
//     resultat = merge(venstre, høyre);
//     return resultat;
//   }
  
  



// function merge(arr1, arr2) {
//     let len1 = arr1.length;
//     let len2 = arr2.length;
//     let sortert = [];
//     let indeksvenstre = 0;
//     let indekshøyre = 0;
//     for (let i = 0; i < len1 + len2; i++) {
//       if (arr1.length > 0 && arr2.length > 0) {
//         if (arr1[0] <= arr2[0]) {
//           sortert.push(arr1[0]);
//           arr1.shift();
//         } else {
//           sortert.push(arr2[0]);
//           arr2.shift();
//         }
//       } else if (arr1.length > 0) {
//         sortert.push(arr1[0]);
//         arr1.shift();
//       } else {
//         sortert.push(arr2[0]);
//         arr2.shift();
//       }
//     }
//     return sortert;
//   }