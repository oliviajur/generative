let font;
let fontSize = 500;
let dArray;
let r = 0;

function preload() {
    font = loadFont('../Raleway-Regular.ttf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(font);
    textSize (fontSize);

    dArray = font.textToPoints("D", 200, 600, fontSize, {sampleFactor: 0.03});

    //print (dArray);

}

function draw() {
    background(255);
    //text('D', width/2, height/2);

    beginShape();
    for (let i=0; i< dArray.length; i++){
        push ();
        translate (dArray[i].x, dArray[i].y);
        rotate (r);
        r += 0.2
        stroke("#6495ED")
        fill("#BC69AA");
        strokeWeight(5)
        triangle(-20 , -10, 40, 20, 50);
        pop ()
    }
    endShape(CLOSE);
}