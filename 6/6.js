let a1 = 0.03
function setup(){
    createCanvas(windowWidth,windowHeight);
    background(250);
}

function draw(){
    //background(0);
    translate (width/16, height/16);
    translate(p5.Vector.fromAngle(millis() / 500, 50));

    text("D", 570,600);
    textSize(550);
    //textStyle ();
    fill ("hsla(162,70%,59%,0.01)");
    strokeWeight(0.5);
    stroke('hsla(5,80%,65%,0.5)');

    text("D", 550,580);
    textSize(550);
    fill ("hsla(162,70%,59%,0.03)");
    strokeWeight(0.5);
    stroke('hsla(5,80%,65%,0.5)');

}