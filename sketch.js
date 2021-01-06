
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var box1,box2,box3;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,680,800,20);

	box1 = new Box(400,660,300,20);
	box2=new Box(240,620,20,100);
	box3=new Box(560,620,20,100);

    paper1=new PaperBall(80,450);

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
 
    ground1.display();
  
	box1.display();
	box2.display();
	box3.display();

	paper1.display();

	keyPressed();

	drawSprites();
 
}

function keyPressed()
{
	if (keyCode=== UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-5});
	}

}



