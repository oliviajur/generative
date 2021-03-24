let font;
let fontSize = 700;
let dArray;
let r = 0;

function preload() {
    font = loadFont('../Raleway-Regular.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(font);
    textSize (fontSize);

    dArray = font.textToPoints("D", 200, 600, fontSize, {sampleFactor: 0.09});

    //print (dArray);

}

function draw() {
    background(255);
    //text('D', width/2, height/2);

    beginShape();
    for (let i=0; i< dArray.length; i++){
        fill("#87FF65")
        stroke("#B79CED");
        strokeWeight(5)
        rect(dArray[i].x, dArray[i].y, mouseX,30,40)
    }
    endShape(CLOSE);
}