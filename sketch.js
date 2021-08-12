var bck,bcimg;
var chef,chefimg;
var girl,girlimg;
var boy,boyimg;
var police,policeimg;
var lady,ladyimg;
var counter;
var order,orderimg;
var options,thankimg,thank;
var choice=1;
var od1,od1img,od2,od2img,od3,od3,od3img,od4,od4img;
function setup(){
    bcimg = loadImage("img1.png");
    chefimg = loadImage("img3.png");
    ladyimg=loadImage("img6.png");
    orderimg=loadImage("txt2.png");
    od1img=loadImage("order1.png");
    od2img=loadImage("order2.png");
    od3img=loadImage("order3.png");
    thankimg=loadImage("thank.jpg");
    od4img=loadImage("4.png");
    policeimg=loadImage("police.png");
    createCanvas(windowWidth,windowHeight);
  
}

function draw(){
   background(0);
   bcg();
  
   customers();
  
    ladyOrder();
   

  drawSprites();
}



function bcg(){
    bck = createSprite(width/2,height/2+100,windowWidth,windowHeight);
    bck.addImage("background",bcimg);
  bck.scale = 0.35;

  chef = createSprite(windowWidth-700,windowHeight-300);
  chef.addImage("chef",chefimg);
  chef.scale = 0.10;

  order=createSprite(windowWidth-650,windowHeight-400);
  order.addImage("order",orderimg);
  order.scale=1;
  
  counter = createSprite(windowWidth-830,windowHeight-140); 
  counter.visible = false;    
 
 
}
function ladyOrder(){
 
  if(keyWentDown("up")){
     order.visible=false;
     police.visible=false;
      od1=createSprite(windowWidth-1000,windowHeight-200);
      od1.addImage("order1",od1img);
    
      od2=createSprite(windowWidth-800,windowHeight-200);
      od2.addImage("order2",od2img)
        }
       
       
   if(keyWentDown("Down")){
          order.visible=false;
          police.visible=false;
           od3=createSprite(windowWidth-1000,windowHeight-200);
           od3.addImage("order1",od3img);
         
           od4=createSprite(windowWidth-800,windowHeight-200);
           od4.addImage("order2",od4img)
             }
   
   }


  


function customers(){
lady = createSprite(windowWidth-1200,windowHeight-200);
lady.addImage("lady",ladyimg);
lady.scale = 0.3;

police = createSprite(windowWidth-300,windowHeight-200)
police.addImage("police",policeimg);
police.scale = 0.5;
}


 
