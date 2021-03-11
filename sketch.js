var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	var starOr = {
		mass: 20,
		isStatic: true
	}
	star = createSprite(650,30,starOr);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	Engine.run(engine);

}


function draw() {
  fairyVoice.play();

  background(bgImg);
	
  if(keyDown("RIGHT_ARROW")){
	fairy.x = fairy.x+5;
  }
  if(keyDown("LEFT_ARROW")){
	fairy.x = fairy.x-5;
  }

  if(keyDown("DOWN_ARROW")){
	for(star.y = star.y; star.y < 470; star.y = star.y+0){
		star.y = star.y+5;
	}
	fairy.x = 510;
  }

  drawSprites();


function keyPressed() {
	star = {
		mass: 10,
		restitution: 2.0
	}
	World.add(world, star);
	starOr = {
		isStatic: false
	}

	}
}