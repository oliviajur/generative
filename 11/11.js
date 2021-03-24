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

    dArray = font.textToPoints("D", 200, 600, fontSize, {sampleFactor: 0.4});

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
        r += 0.2;
        stroke("black");
        strokeWeight(0.5);
        line(-15,-15,15,15);
        pop();
    }
    endShape(CLOSE);
}