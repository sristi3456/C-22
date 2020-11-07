const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object;
var ball;

function setup() {
  createCanvas(600,600);
  engine=Engine.create();
  world=engine.world;
  var object_options={
    isStatic:true
  }
  object=Bodies.rectangle(300,300,50,50,object_options);
  World.add(world,object);
  console.log(object);
  console.log(object.position.x) ;
  console.log(object.position.y) ;
  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(345,445,20,ball_options);
  World.add(world,ball);

  
  
}

function draw() {
  background("pink"); 
  Engine.update(engine) ;
  rectMode(CENTER);
  rect(object.position.x ,object.position.y,50,50);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x ,ball.position.y,30,30);
}
