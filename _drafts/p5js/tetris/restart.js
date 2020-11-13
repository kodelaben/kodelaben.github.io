function restart() {
  let bredde = 400;
  let hoyde = 2 * bredde;
  let str = bredde / 10;
  let breddedata = 230;
  let scoreboard = new Scoreboard();
  let nestekloss;
  let strek;
  let brett;
  let pausestatus = 0;
  createCanvas(bredde + breddedata, 800);
  nestekloss = new Kloss(random(klossfigurer));
  kloss = new Kloss(random(klossfigurer));
  brett = new Brett();
  console.log(brett)
}
