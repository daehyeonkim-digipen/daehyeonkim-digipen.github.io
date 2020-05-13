//Daehyeon Kim
//Deck of Cards Assignment
//CS099
//Spring, 2020
var x
var y
function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(220);
  rectMode(CENTER)
  y = 50
  for(let row = 1; row < 5; row+=1){
    x = 50 
  for(let column = 1; column < 14; column += 1){
    rect(x,y,40,60)
    if(column==1){text('A', x-5, y-10)}
    if(column==11){text('J', x-5, y-10)}
    if(column==12){text('Q', x-5, y-10)}
    if(column==13){text('K', x-5, y-10)}
    else if(column>=2 && column<=10){text(column, x-5, y-10)}
    
    var k = (column % 4)+row
    if(k >= 4){k-=4}
    if(k == 3){spd()}
    else if(k == 0){dia()}
    else if(k == 2){hrt()}
    else if(k == 1){clv()}
    
    x+=50
    
    }
    y+=100
    
           }
}


function spd(){
  push()
  fill(0)
  triangle(x,y,x+10,y+10,x-10,y+10)
  arc(x-5,y+9.5,10,10,0,PI,CHORD)
  arc(x+5,y+9.5,10,10,0,PI,CHORD)
  push()
  strokeWeight(5)
  line(x,y+10,x,y+20)
  line(x-10,y+20,x+10,y+20)
  pop()
  pop()
}

function dia(){
push()
  noStroke()
  fill(255,0,0)
  quad(x,y, x+10,y+10,x,y+20,x-10,y+10)
  pop()
}

function hrt(){
push()
  noStroke()
  fill(255,0,0)
  arc(x+5,y+5,10,10,PI,2*PI,CHORD)
  arc(x-5,y+5,10,10,PI,2*PI,CHORD)
  arc(x,y+5,20,20,PI/2,PI,PIE)
  arc(x,y+5,20,20,0,PI/2,PIE)
  pop()
}
function clv() {
  push()
  fill(0)
  circle(x,y+2.5,10)
  circle(x-5,y+7.5,10)
  circle(x+5,y+7.5,10)
  strokeWeight(5)
  line(x,y+10,x,y+20)
  line(x-10,y+20,x+10,y+20)
  pop()}