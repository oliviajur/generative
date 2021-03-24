let value = 55;
function setup(){ 
    createCanvas (windowWidth,windowHeight);
    background (220,0,70); //<-- when we put the baclround here we get a trail
    //cause it keeps getting redrawn
};
 

function draw(){    
     noStroke();
     fill("white");
     stroke ("black");
     rect (mouseX,mouseY,20,50, 50);

     letter();
};

function letter(){
     textSize(800);
     textFont ("futura");
     fill("hsla(214,84%,66%,0)");
     text("D", 550,700);
     strokeWeight (1);
     stroke(value)
}

function mousePressed(){
    background (220,0,70);
} 
 
 
 
 














console.log("heyy")