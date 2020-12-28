const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var triangle1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    console.log(ground);

    var ball_options ={
        restitution:0.6
    }
    
    ball = Bodies.circle(100,200,25, ball_options);
    World.add(world,ball);
    
    triangle1 = Bodies.polygon(300,300,3,30);
    World.add(world,triangle1);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,25,25);
    triangle(triangle1.vertices[0].x,triangle1.vertices[0].y,triangle1.vertices[1].x,triangle1.vertices[1].y,triangle1.vertices[2].x,triangle1.vertices[2].y);
}