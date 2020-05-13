//Daehyeon Kim
//Draw Grid lines
//CS099
//Spring, 2020
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for(let a=0; a < windowWidth; a+=50)
  {for(let b=0; b < windowHeight; b+=50)
  { line(a,0,a,windowHeight)
    line(0,b,windowWidth,b)
    text(a,a+15,25)
    text(b+50 ,15,b+75)
  }
  }

}