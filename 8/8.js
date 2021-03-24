let font;
let fontSize = 700;
let dArray;

function preload() {
    font = loadFont('../Raleway-ExtraBoldItalic.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(font);
    textSize (fontSize);

    dArray = font.textToPoints("D", 200, 600, fontSize, {sampleFactor: 0.5});

    //print (dArray);

}

function draw() {
    background(255);
    //text('D', width/2, height/2);

    beginShape();
    for (let i=0; i< dArray.length; i++){
        //vertex(dArray[i].x, dArray[i].y);
        stroke("#EF271B");
        strokeWeight(0.2);
        line(dArray[i].x, dArray[i].y,mouseX, mouseY);
    }
    endShape(CLOSE);
}
