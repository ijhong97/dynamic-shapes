// Isabella Hong
// Section A
// ijhong@andrew.cmu.edu
// Project-01

//cube dimensions 
var sx = 200;
var sy = 200;
var sz = 200;

//mini cube dimensions 
var mx = 50; 
var my = 50; 
var mz = 50; 

//direction of growth 
var dir = 1; 
var speed = 2; 

function setup() { 
	createCanvas(640, 480, WEBGL);
	noCursor();
}

function draw() {
	//background color changing
	//range for background colors  
	var colorR = map(mouseY, 0, height, 250, 215);
	var colorG = map(mouseY, 0, height, 235, 230);
	var colorB = map(mouseY, 0, height, 215, 250);
	background(colorR, colorG, colorB);	

	//middle cube 
	rotateX(mouseX * 0.01); 
	rotateY(mouseY * 0.01); 
	ambientLight(0);
	ambientMaterial(50); 
	//grow 
	speed = mouseX / 10;
	box(sx + speed * dir, sy + speed * dir, sz + speed * dir);

	//small cube 1 
	translate(-width / 2, -height / 2); 
	push();
	rotateX(mouseX * 0.03); 
	rotateY(mouseY * 0.03); 
	ambientLight(250);
	ambientMaterial(255);
	box(sx / 2, sy / 2, sz / 2);
	pop();

	//small cube 2
	translate(620, 460);
	push();
	rotateX(mouseX * 0.04); 
	rotateY(mouseY * 0.04); 
	ambientLight(50);
	ambientMaterial(250); 
	box(sx / 2, sy / 2, sz / 2);
	pop();

	//mini cubes rotating 
	translate(300 , 460);
	push(); 
	rotateX(frameCount * 0.03); 
	rotateY(frameCount * 0.03); 
	ambientLight(50); 
	ambientMaterial(50);
	box(mx ,my, mz); 
	translate(width - 300, height -460);
	box(mx, my, mz); 
	pop();

}






	

