const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var paredesE,paredesD

function preload()
{
	
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	
	
	createCanvas(700, 620);

    var ball_options ={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
	};
	
	ball = Bodies.circle(200,200,35,ball_options);
    World.add(world,ball);

	
	//Create the Bodies Here.
    ground = new Ground(400,620,900,30)
    paredesE = new Ground(670,600,10,100)
    paredesD = new Ground(590,600,10,100)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,35,35)
  

  paredesD.display();
  paredesE.display();
  ground.display();

  
}


function keyPressed()
{
 if(keyCode==UP_ARROW){
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
 }

}
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	World.add(world,ball);

	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new round(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.display();
  leftSide.display();  
  rightSide.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    
  	}
}*/
