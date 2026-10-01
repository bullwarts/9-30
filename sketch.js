let x,y,d;
let numCircles;
let colorPalette = ['#fec5bb', '#fcd5ce', '#fae1dd','#f8edeb','#e8e8e4','#d8e2dc','#ece4db','#ffe5d9','#ffd7ba','#fec89a'];
let posX = [40,80,120,160,200,240,280,320,360,400];
let posY = [50,100,200,300,400,500,600,700,800,900];


function setup() {
createCanvas(windowWidth, windowHeight);

angleMode(DEGREES); // 0 to 360 degrees
rectMode(CENTER);

pixelDensity(1);

angle = 0;
rotSpeed = random(1,2);

x = width/2;
y = height/2;
d = width/2;
numCircles = 10;


}

function draw() {
  // Set background to black
  background(255,0);



for (let i = 0; i < numCircles; i++){


strokeWeight(1);
stroke(colorPalette[i]);


push();
translate(width/2,height/2);
rotate(angle);
line(posX[i],random(1,200),posY[i],random(1,200));
pop();


push();
fill('red');
strokeWeight(5);
stroke(colorPalette[i]);
translate(width/2,height/2);
rotate(angle);
circle(posX[i],random(1,200),15,15);
pop();

push();
fill('yellow');
strokeWeight(5);
stroke(colorPalette[i]);
translate(width/2,height/2);
rotate(angle);
circle(posX[i],random(1,200),10,10);
pop();

}

angle += rotSpeed;

x += random(1,2);
y += random(1,2);

filter(BLUR,1.5);
filter(DILATE);
filter(ERODE);




}
