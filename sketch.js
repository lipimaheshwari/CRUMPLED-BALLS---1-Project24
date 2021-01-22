
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 430, width, 10 , {isStatic:true} );
	World.add(world, ground);


	//Create the Bodies Here.
	
	paper = new Paper(400,30,30);

	Box1 = new RedBox(800,groundSprite.y-15,200,20);
	Box2 = new RedBox(900,groundSprite.y-55,20,100);
	Box3 = new RedBox(700,groundSprite.y-55,20,100);

	Engine.run(engine);
  
}


function draw() {

	rectMode(CENTER);
	background(0);
	drawSprites();

	paper.display();
	Box1.display();
	Box2.display();
	Box3.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:105,y:-105})
	}
}

