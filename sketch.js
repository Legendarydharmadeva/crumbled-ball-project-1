
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bar1,bar2,bar3; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bar1 = createSprite(600,680,20,50);
	bar1.shapeColor("blue");

	bar2 = createSprite(620,680,50,20);
	bar2.shapeColor("blue");

	bar3 = createSprite(670,680,20,50);
	bar3.shapeColor("blue");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  bar1.display();
  bar2.display();
  bar3.display();
  ground.display();

  drawSprites();


	  
  }
 
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}







