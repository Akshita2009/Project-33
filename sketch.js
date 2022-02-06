const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world
var snowimg
var snow,s1,s2
function preload(){
  snowimg=loadImage("snow3.jpg")
s1=loadImage("snow4.webp")
s2=loadImage("snow5.webp")
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  
}

function draw() {
  background(snowimg); 
  Engine.update(engine) 

  makesnow()
  drawSprites();
}
function makesnow(){
  if(frameCount%120===0){
  
  snow=createSprite(200,10,30,30)
  snow.addImage(s1)
  snow2=createSprite(300,20,30,30)
  snow2.addImage(s2)
  snow2.scale=0.1
  snow2.velocityY=3
  snow.scale=0.2
  snow.velocityY=2
  snow.x=Math.round(random(10,700))
snow2.x=Math.round(random(50,500))
}
}
function mousePressed(){
  snow.changeImage(s2)
}