/**
 * Project 1 - Interactive Image
 * Name: Isa Coronel
 * Comments: Jiggly Puff bounces off the canvas and when mouse is pressed, micorphone spins in the hand
 */

// Global Variables go here
var a = 0 // rotation angle
var x = 0, y = 0; // sprite location
var xSpeed = 0, ySpeed = 0; // movement on horizontal and vertical
var m = 0 //microphone angle

function setup(){
  // this function will run once
  createCanvas(600, 400); // create a 600x400 pixel drawing canvas
  x = width/2 // assigning middle of canvas a variable
  y = height/2 // assigning middle of canvas a variable
  xSpeed = random(-3, 3) // moves horizontally with any speed randomly assigned between two numbers
  ySpeed = random(-3, 3) // moves vertically with any speed randomly assigned between numbers
}

function draw(){
  // this function runs again and again (60x per second)
  background(200); //light gray background

  x += xSpeed; // 
  y += ySpeed; //

  if(x > width || x < 0 ){ //checking for two different arguments, greater than width OR less than 0
    xSpeed *= -1;
  }

  if(y > height || y < 0){
    ySpeed = ySpeed - (ySpeed * 2); // bounce off the walls
   }

  text("Jiggly Puff", width/2, height/2)

  // add your image drawing code here
  push(); //create layer
  translate(x, y)
  rotate(a); 
  a += .01 // rotate image from center at width/2

  
  //jiggly puff image
  strokeWeight(2) //change stroke size
  fill("pink")
  triangle( - 85, - 125, - 30, - 95, - 85, - 60) // left outer ear
  triangle(95, - 115, 40, - 80, 95, - 35) // right outer ear
  ellipse(- 50, 100, 45, 20) // left foot
  ellipse(50, 100, 45, 20) // right foot 
  fill("brown")
  triangle(- 82, - 115, - 40, - 85, - 75, - 50) // left inner ear
  triangle(90, - 105, 50, - 70, 85, - 35) // right inner ear
  fill("pink")
  ellipse(0, 0, 210) //head-body
  fill("white")
  strokeWeight(2) // change stroke size
  ellipse(- 50, - 20, 70) //left eye
  ellipse(50, 5, 70) //right eye
  fill("teal")
  ellipse(- 40, - 15, 50) // left eye pupil
  ellipse(60, 10, 50) // right eye pupil
  fill("white")
  ellipse(- 27, - 30, 10) // left eye highlight
  ellipse(70, - 8, 10) // right eye highlight
  noFill()
  arc(0, 0, 10, 10, 0, PI) //mouth
  arc(- 75, 30, 25, 55, 0, PI) // L arm
  arc(65, 50, 25, 55, 0, PI) // R arm 
  fill("pink")
  arc( 10, - 95, 85, 75, PI, TWO_PI+HALF_PI)// large hair tuff
  noFill()
  arc(10, - 70, 65, 65, 0, PI + HALF_PI)// inner hair tuff
  
  push();
  translate(80, 65);
  rotate(m) //rotate microphone angle
  if(mouseIsPressed){ //if moused pressed, microphone will rotate around jiggly puff
    m += -0.25
  } else{
    m = 0 //if not, microphone stays in hand
  }
  fill(125)
  rect(-30, -10, 55, 20) //microphone handle
  rect(15, -12, 5, 24) //microphone
  ellipse(34, 0, 29, 29) //microphone
  line(30, -13, 30, 13) //microphone
  pop();
  


  pop(); //dispose of layer

/* 
  Use the following if()...else() structure to incorporate mouse click control of your animation
*/
  //if(mouseIsPressed){
    //check each frame to see if the mouse is pressed, then do something
    //a += .01; 
  //} else {
    // do something here if the mouse is NOT pressed
   // a = 0
  //}
//}

/** 
 * the mousePressed() function is separate from draw(). 
 * It only runs (one time) if the mouse is clicked
*/
//function mousePressed(){
  // add code here if you want something to execute once each time the mouse is pressed
}