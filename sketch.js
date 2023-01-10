
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var bottomG,topG,leftG,rightG
let engine;
let world;
var ball

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  bottomG = new Ground(200,390,400,20);
  topG= new Ground(200,10,400,20);
  leftG= new Ground(10,200,20,400);
  b1 = createImg("push.png")
  b1.position(220,30)
  b1.size(50,50)
  b1.mouseClicked(Hforce)
  rightG = new Ground(390,200,20,400)
  ball = Bodies.circle(200,200,20,{restitution:0.5})
  World.add(world,ball)
}
function Hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.05,y:0.05})


}
function draw() 
{
  background(51);
  Engine.update(engine);
  bottomG.display()
  topG.display()
  leftG.display()
  rightG.display()
  ellipseMode(RADIUS)
  ellipse (ball.position.x,ball.position.y,20)
}

