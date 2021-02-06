
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var tree,treeImage,boy,boyImage;

function preload()
{
	 treeImage = loadImage("tree.png");
	 boyImage = loadImage("boy.png"); 

}

function setup() {
	createCanvas(1200, 900);

	tree = createSprite(1000,450);
	tree.addImage(treeImage);

	boy = createSprite(200,450);
	boy.addImage(boyImage);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1000,70,30);
	mango3 = new Mango(1100,70,30);
	mango4 = new Mango(1000,230,30);
	mango5 = new Mango(900,230,40);
	stone = new Stone(235,420,30);
	slingshot = new Slingshot(stone.body,{x:100,y:350});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
stone.display();
slingshot.display();



  drawSprites();
 
}



