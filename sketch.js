
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone;
var chain;
var tree;
function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.;

  stone = new Stone(50,400,40);
  boy = createSprite(200,400,10,10);
  image(boyImage ,200,340,200,300);
  tree = new Tree(750,550,100,100);
  chain = new Chain(stone.body, pointA);

  
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);	
  rectMode(CENTER);
  background(0);
  

drawSprites();
stone.display();
chain.display();
boy.display();
 }




