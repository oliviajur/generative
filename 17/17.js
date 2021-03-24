let font;
let fontSize = 700;
let dArray;
let r = 0;
let x = 2;
let y = 2;
function preload() {
    font = loadFont('../Raleway-Regular.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(font);
    textSize (fontSize);

    dArray = font.textToPoints("D", 200, 600, fontSize, {sampleFactor: 0.1});

    //print (dArray);

}

function draw() {
    background(255);
    //text('D', width/2, height/2);

    beginShape();
    for (let i=0; i< dArray.length; i++){
        push ();
        translate (dArray[i].x, dArray[i].y,);
        stroke("#3DDC97")
        strokeWeight(2)
        rect(-10,-10,x,y);
        x += 0.001;
        y += 0.001;
        rotate (r);
        r += 0.01
        pop ();
    }
    endShape(CLOSE);
}