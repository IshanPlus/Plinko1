const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.js;
const Body = Matter.Body;

var ground, world, body, engine;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;



var width = 480;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);

  ground = new Ground(240, 770, 480, 30);

  for (var i = 0; i <= width; i = i + 80) {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));   
  }
  
  for (var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  
  for (var j = 15; j <=width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  
  for (var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinko(j, 275));
  }
  
  for (var j = 15; j <=width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  Engine.run(engine);
  
}

function draw() { 
  rectMode (CENTER)
  background(0)

  drawSprites();

  for (var a = 0; a < divisions.length; a++){
    divisions[a].display(); 
  }

  if (frameCount%60 === 0){
    particles.push(new Particle(random(width/2/-10, width/2+10), 10, 10));
  }
  
  for (var p = 0; p < particles.length; p++){
    particles[p].display();
  }

  for (var k = 0; k < plinkos.length; k++){
    plinkos[k].display(); 
  }
  
  
  ground.display();
}



