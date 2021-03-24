let font;
let fSize;
let msg;
//let msg2;
let pts = [];
//let pts2 = [];

function preload(){
    font = loadFont("../Raleway-Regular.ttf");
}

function setup (){
    createCanvas (windowWidth,windowHeight)

    fSize = 556;
    textFont(font);
    textSize (fSize);
    msg = "D";
    //msg2 = "D"
    pts = font.textToPoints (msg, 0, 0, fSize,{
        sampleFactor: 0.03,
        simplifyThreshhold: 0.0
    })
    //pts2 = font.textToPoints (msg, 0, 0, fSize,{
    //    sampleFactor: 0.5,
    //    simplifyThreshhold: 0.0
    //})
    console.log(pts)

    stroke ("#6495ED")
    strokeWeight (4);
    noFill()
}

function draw(){
    background(250)

    //const d = dist(mouseX, mouseY, width/2, height/2)
   // const angle = atan2(mouseY-height/2, mouseX-width/2)

    //animate on its own
    const d = 10 + sin(frameCount/50.) * 10
    const angle = frameCount/20.

    push()
    translate(20, height*5/8)

    for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        push()
        translate(p.x, p.y)
        rotate(angle)
        line(-d, -d, +d, +d)
        pop()
    }
    pop()

    //for (let i = 0; i < pts2.length; i++) {
    //    const p = pts2[i]
    //    push()
    //    translate(p.x, p.y)
    //    rotate(angle)
    //    line(-d, -d, +d, +d)
    //    pop()
    //}
    //pop()
}