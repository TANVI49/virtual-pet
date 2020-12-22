//Create variables here
var dog, happyDogi,dogi, database, foodS, foodStock

function preload(){
dogi=loadImage("images/dogImg.png")
happyDogi=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  dog=createSprite(250,300);
dog.addImage(dogi);
dog.scale=0.5;
database = firebase.database();
foodStock=database.ref('food');
foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogi);
}
  drawSprites();
  //add styles here
textSize(20)
fill("white")
stroke("white")
text("Note:Press UP_ARROW Key To Feed Drago Milk",20,20)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}