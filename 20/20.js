let font;
let fontSize = 700;
let dArray;
let r = 0;

function preload() {
    font = loadFont('../Raleway-ExtraBoldItalic.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(font);
    textSize (fontSize);

    dArray = font.textToPoints("D", 200, 600, fontSize, {sampleFactor: 0.6});

    //print (dArray);

}

function draw() {
    background(255);
    //text('D', width/2, height/2);

    beginShape();
    for (let i=0; i< dArray.length; i++){
        //vertex(dArray[i].x, dArray[i].y);
        push();
        translate (dArray[i].x, dArray[i].y,0,0);
        rotate(r);
        r += 0.008;
        stroke("#FF8CC6");
        strokeWeight(1);
        line(-30 + (random(50)),-30,15,15);
        pop();
    }
    endShape(CLOSE);
}