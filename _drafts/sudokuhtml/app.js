function mulig(x, y, n) {
  let brett = document.getElementById("sudokubrett");
  // sjekk boks som x,y ligger inne i
  let boks = y - (y % 3) + (x - (x % 3)) / 3;
  for (let i = 0; i < 9; i++) {
    if (
      brett.childNodes[2 * boks + 1].childNodes[2 * i + 1].childNodes[0]
        .value == n
    ) {
      return false;
    }
    // console.log(brett.childNodes[2*boks+1].childNodes[2*i+1].childNodes[0].value);
  }
  // sjekk rad y
  let xrad = (x - (x % 3)) / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        // console.log(
        //   brett.childNodes[2 * (xrad + 3 * i) + 1].childNodes[
        //     2 * (3 * j + (x % 3)) + 1
        //   ].childNodes[0]
        // );
      if (
        brett.childNodes[2 * (xrad + 3 * i) + 1].childNodes[
            2 * (3 * j + (x % 3)) + 1
          ].childNodes[0].value == n
      ) {
        return false;
      }
    }
  }
  // sjekk rad x
  let yrad = y - (y % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
    //   console.log(
    //     brett.childNodes[2 * (yrad + i) + 1].childNodes[2 * ((y % 3)*3 +j) + 1]
    //       .childNodes[0]
    //   );
      if (
        brett.childNodes[2 * (yrad + i) + 1].childNodes[2 * ((y % 3)*3 +j) + 1].childNodes[0]
          .value == n
      ) {
          return false;
      }
    }
  }
  return true;
}

let solved = false;
function losning()
{
    
    let brett = document.getElementById("sudokubrett");
    for (let y = 0; y < 9; y++)
    {
        for (let x = 0; x < 9; x++)
        {
            let boks = y - (y % 3) + (x - (x % 3)) / 3;
                if ((brett.childNodes[2 * boks + 1].childNodes[2 * ((x % 3)+ (y % 3)*3)  + 1].childNodes[0]
                    .value == "1" || 
                    brett.childNodes[2 * boks + 1].childNodes[2 * ((x % 3)+ (y % 3)*3)  + 1].childNodes[0]
                    .value == "2" ||
                    brett.childNodes[2 * boks + 1].childNodes[2 * ((x % 3)+ (y % 3)*3)  + 1].childNodes[0]
                    .value == "3" ||
                    brett.childNodes[2 * boks + 1].childNodes[2 * ((x % 3)+ (y % 3)*3)  + 1].childNodes[0]
                    .value == "4" ||
                    brett.childNodes[2 * boks + 1].childNodes[2 * ((x % 3)+ (y % 3)*3)  + 1].childNodes[0]
                    .value == "5" ||
                    brett.childNodes[2 * boks + 1].childNodes[2 * ((x % 3)+ (y % 3)*3)  + 1].childNodes[0]
                    .value == "6" ||
                    brett.childNodes[2 * boks + 1].childNodes[2 * ((x % 3)+ (y % 3)*3)  + 1].childNodes[0]
                    .value == "7" ||
                    brett.childNodes[2 * boks + 1].childNodes[2 * ((x % 3)+ (y % 3)*3)  + 1].childNodes[0]
                    .value == "8" ||
                    brett.childNodes[2 * boks + 1].childNodes[2 * ((x % 3)+ (y % 3)*3)  + 1].childNodes[0]
                    .value == "9") != true)
                    {
                        for (let n = 1; n <=9; n++)
                        {
                        if (mulig(x,y,n))
                        {
                            brett.childNodes[2 * boks + 1].childNodes[2 * ((x % 3)+ (y % 3)*3)  + 1].childNodes[0].value = n.toString();
                            if (solved == false)
                            {
                            losning();
                            }
                            if (solved == false)
                            {
                            brett.childNodes[2 * boks + 1].childNodes[2 * ((x % 3)+ (y % 3)*3)  + 1].childNodes[0].value = "0";
                            }
                        }
                    }
                    return;
            }
        }
    }
    // window.prompt("Enter your name: ");
    solved = true;
    console.log("hei");
    return console.log("solved");
} 
// document.getElementById("sudokubrett").childNodes[2 * 3 + 1].childNodes[2 * ((1 % 3)+ (1 % 3)*3)  + 1].childNodes[0].value = "3";