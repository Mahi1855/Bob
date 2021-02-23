
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,ground,chain1,chain2,chain3,chain4,chain5,chain6
function preload()
{ 
	
}

function setup() {
	createCanvas(800, 700);
    background("white")
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Roof(25,10,1200,20)
    bobObject1 = new bob(50,100,100,PI/2)
    chain1 = new Chain(bird.body,{x:200,y:50})
	bobObject2 = new bob(75,100,100,PI/2)
    chain2 = new Chain(bird.body,{x:200,y:50})
	bobObject3 = new bob(100,100,100,PI/2)
    chain3 = new Chain(bird.body,{x:200,y:50})
	bobObject4 = new bob(125,100,100,PI/2)
    chain4 = new Chain(bird.body,{x:200,y:50})
	bobObject5 = new bob(150,100,100,PI/2)
    chain5 = new Chain(bird.body,{x:200,y:50})
	bobObject6 = new bob(375,100,100,5)
    chain6 = new Chain(bird.body,{x:200,y:50})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



