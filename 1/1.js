let a = 0.08;
let c = 214;
function setup(){ 
   createCanvas (windowWidth,windowHeight);
   background (250);
};

function draw (){ 
   makeshape();

}
function makeshape(){
      textSize (500);
      textFont ("arial");
      fill("hsla("+c+",84%,66%,"+a+")");
      strokeWeight (1);
      stroke('rgba(0,255,0,0.5)');
      text ("D", 550+(random(80)), 550+(random(80)))
}

console.log("hey");


