function setup() {
    createCanvas(500, 500);

  fill("brown");
  rect(50, 250, 100, 50);

  fill("green");
  rect(200, 250, 100, 50);

  fill("orange");
  rect(350, 250, 100, 50);
  
  fill("purple");
  rect(150, 350, 100, 50);

}


    

function mouseDragged() {
     ellipse(mouseX, mouseY, random(70, 140), random(70, 160), random(70, 180));
    //prevent default
    return false;
  
} 

function mouseClicked() {

    if (mouseX > 50 && mouseX < 150 && mouseY > 250 && mouseY < 300) {
        fill("brown");
    } else if (mouseX > 200 && mouseX < 300 && mouseY > 250 && mouseY < 300) {
        fill("green");
    } else if (mouseX > 350 && mouseX < 450 && mouseY > 250 && mouseY < 300) {
        fill("orange");
    } else if(mouseX > 150 && mouseX < 250 && mouseY > 350 && mouseY < 400) {
        background("white");
        setup();
    }


} 


    