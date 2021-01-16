const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {

	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(100,100,300,100);
	plane = new Plane(400,690,800,20);
	stone = new Stone(200,200,100,100,PI/4);
	rubber = new Rubber(100,100,50);
	iron = new Iron(500,500,50,100,PI/2);

	sand1 = new Sand(300,300,30);
	sand2 = new Sand(350,350,30);
	sand3 = new Sand(400,300,30);
	sand4 = new Sand(450,300,30);
	sand5 = new Sand(500,300,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  iron.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
 
}



