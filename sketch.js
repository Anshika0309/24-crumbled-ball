
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject, paperPos;
var dustImg, paperImg;
var radius = 70;


function preload()
{
	dustImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options = {
isStatic : false,
restitution : 0.3,
friction : 0,
density : 1.2
}

ball = Bodies.circle(310,100,radius/2.6, ball_options);
World.add(world,ball);

ground = new Ground(width/2,670, width, 20);
leftside = new Ground(1100,600,10,120);
rightside = new Ground(1270,600,10,120);
bottomside = new Ground(1190,650,150,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();
  rightside.display();
  leftside.display();
  bottomside.display();

  imageMode(CENTER);
  image(paperImg, ball.position.x, ball.position.y, radius, radius);

  image(dustImg, 1185, 570, 200, 200);
  drawSprites();
 

}

function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball, ball.position, {x:140, y:-145})
}
}


