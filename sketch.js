//Create variables here
var dog, happyDog,dogPic,happyDogPic;

var foodS, foodStock;

var database;


function preload()
{
  //load images here
  dogPic=loadImage("Dog.png");
happyDogPic = loadImage("happyDog.png");

}

function setup() {

  database = firebase.database();
  console.log(database);
  
  createCanvas(500, 500);
  

dog=createSprite(300,300,10,10);
dog.addImage(dogPic);
dog.scale=0.2


foodStock=database.ref('Food');
foodStock.on("value",readStock);






}


function draw() {  

background(46,139,87)

if (keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(happyDogPic)

}


  drawSprites();
  //add styles here
strokeWeight(2);
  stroke("blue");
  fill("red");
  textSize(20);
text("NOTE:Press UP_ARROW To Feed Miveka Milk",50,50);


text ()



}
function readStock(data){
   foodS=data.val(); 
  } 
  
 /* function writeStock(x)
  { if(x<=0){ 
    x=0; 
  }
  else{ x=x-1; } 
  database.ref('/').update({
    
    Food:x }) }*/



function writeStock(x) {

if (x<=0){

  x=0;
}
else{

x=x-1;

}
database.ref('/').update({

  Food:x

})

}
