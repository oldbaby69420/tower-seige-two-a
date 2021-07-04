const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var b1,b2,b3,b4,b5,b6,b7,b8,block9;


function setup() {
  createCanvas(1200,600);
 

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground = new Ground(600,580,1200,20);
  ground2 = new Ground(390,300,260,10);
  ground3 = new Ground(900,400,200,10);

  polygon = new Polygon(150,200,30,30);
  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  block1 = new Box(480,275,30,40);
  block2 = new Box(450,275,30,40);
  block3 = new Box(420,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(360,275,30,40);
  block6 = new Box(330,275,30,40);
  block7 = new Box(300,275,30,40);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);

  b1 = new Box(900,275,30,40);
  b2 = new Box(900,315,30,40);
  b3 = new Box(870,315,30,40);
  b4 = new Box(930,315,30,40);
  b5 = new Box(900,355,30,40);
  b6 = new Box(870,355,30,40);
  b7 = new Box(840,355,30,40);
  b8 = new Box(930,355,30,40);
  b9 = new Box(960,355,30,40);
  


}

function draw() {
  background(55,43,43);
  ground.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display(); 

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  polygon.display();

  launcher.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY})
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if(keyCode = 32){
    launcher.attach(polygon.body);
  }
}