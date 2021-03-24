let font;
let fontSize = 700;
let dArray;
let r = 0;
let c = "#0063B2FF"
let cnv;
let sw = 0.01;

function preload() {
    font = loadFont('../Raleway-Regular.ttf');
}

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    //cnv.mouseOver (changeColor);

    textFont(font);
    textSize (fontSize);

    dArray = font.textToPoints("D", 200, 600, fontSize, {sampleFactor: 0.2});

    //print (dArray);

}

function draw() {
    background(255);
    //text('D', width/2, height/2);

    beginShape();
    for (let i=0; i< dArray.length; i++){
        fill(c)
        stroke("#ED2B33FF");
        strokeWeight (sw);
        ellipse(dArray[i].x, dArray[i].y, 100,60);
    }
    endShape(CLOSE);
}
 function mousePressed (){
     if ( c = c){
        sw += 0.2;
     }
 }