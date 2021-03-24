let font;
let fontSize = 600;
let dArray;
let r = 0;

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
    //background(255);
    //text('D', width/2, height/2);

    beginShape();
    for (let i=0; i< dArray.length; i++){
        push ();
        translate (dArray[i].x, dArray[i].y);
        rotate (r);
        r += 0.3
        stroke("#3DDC97")
        fill("#46237A");
        //strokeWeight(2)
        circle(10, 10,25);
        pop ()
    }
    endShape(CLOSE);
}