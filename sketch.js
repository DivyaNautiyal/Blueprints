const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;



    ground = Bodies.rectangle(200, 380,400, 30, {isStatic : true})
    World.add( world, ground);

    box1 = new Box ( 200, 50, 50, 70, "purple")
    box2 = new Box (  190, 150, 30, 80, "black")

}

function draw(){
    background("green");
    Engine.update(engine);

    fill ("red")
    rectMode(CENTER)
    rect(ground.position.x, ground.position.y, 400, 30 )


    box1.show()
    box2.show()

  

 
}