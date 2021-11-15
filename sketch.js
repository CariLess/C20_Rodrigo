//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;

let motor;
let mundo;

var ball;
var ground;

function setup()
{
  createCanvas(400,400);
  motor = Engine.create();
  mundo = motor.world;

  //propiedades de la pelota
  var ball_options = {
    restitution: 0.95, 
    frictionAir:0.01
  }

  var ground_options = {
    isStatic: true
  }

  ball = Bodies.circle(100,10,20, ball_options);
  World.add(mundo, ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(mundo, ground);
}

function draw() 
{
  background(51);
  Engine.update(motor);


 ellipse(ball.position.x, ball.position.y, 20);
 rectMode(CENTER);
 fill("red");
 rect(ground.position.x, ground.position.y, 400,20);
}

