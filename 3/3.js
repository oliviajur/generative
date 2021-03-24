let a1 = 0.03
function setup(){
    createCanvas(windowWidth,windowHeight);
    background(250);
}

function draw(){
    //background(0);
    translate (width/16, height/16);
    translate(p5.Vector.fromAngle(millis() / 100, 50));

    text("D", 570,600);
    textSize(550);
    textStyle (BOLD);
    fill ("hsla(300,100%,50%,a1)");
    strokeWeight(2);
    stroke('hsla(223,100%,50%,0.5)');

    textSize(550);
    fill ("hsla(300,100%,50%,0.03)");
    strokeWeight(2);
    stroke('hsla(223,100%,50%,0.5)');

}