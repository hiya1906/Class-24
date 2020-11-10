const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var bird;
var pig1,pig2;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,470,70,70);
    box2 = new Box(900,470,70,70);
    box3 = new Box(700,390,70,70);
    box4 = new Box(900,390,70,70);
    box5 = new Box(800,290,70,70);

    ground = new Ground(600,height,1200,20)

    log1 = new Log(800,400,280,PI/2);
    log2 = new Log(800,320,280,PI/2);
    log3 = new Log(730,290,140,PI/7);
    log4 = new Log(870,290,140,-PI/7);

    bird = new Bird(300,200);

    pig1 = new Pig(800,470);
    pig2 = new Pig(800,390);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();

    pig1.display();
    pig2.display();
}