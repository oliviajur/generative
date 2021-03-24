let a1 = 0.03
function setup(){
    createCanvas(windowWidth,windowHeight);
    background(250);
}

function draw(){
    //background(0);
    translate (width/16, height/16);
    translate(p5.Vector.fromAngle(millis() / -200, 180));

    text("D", 570,600);
    textSize(550);
    textStyle (BOLD);
    fill ("hsla(87,100%,49%,a1)");
    strokeWeight(5);
    stroke('hsla(329,100%,43%,0.5)');

    //text("D", 550,580);
    textSize(550);
    fill ("hsla(329,100%,43%,0.03)");
    strokeWeight(2);
    //stroke('hsla(87,100%,49%,0.5)');

}