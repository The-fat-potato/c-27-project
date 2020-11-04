
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200,640,40);
	bob2 = new Bob(230,640,40);
	bob3 = new Bob(260,640,40);
	bob4 = new Bob(290,640,40);
	bob5 = new Bob(320,640,40);

	roof1 = new roof(400,100,300,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	roof1.display();

  drawSprites();
 
}



