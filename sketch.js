var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	dropZone1=createSprite(400,650,100,20);
	dropZone2=createSprite(340,610,20,100);
	dropZone3=createSprite(440,610,20,100);

	dropZone1.shapeColor=("red");
	dropZone2.shapeColor=("red");
	dropZone3.shapeColor=("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, friction:1, isStatic:true});
	World.add(world, packageBody);
	
	dropZone1Body = Bodies.rectangle(400,610,100,20, {isStatic:false});
	World.add(world, dropZone1Body);

	dropZone2Body = Bodies.rectangle(340,610,20,100, {isStatic:false});
	World.add(world, dropZone2Body);

	dropZone3Body = Bodies.rectangle(440,610,20,100, {isStatic:false});
	World.add(world,dropZone3Body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
  }
}



