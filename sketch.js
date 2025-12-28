let volume = 1.5;
let animal = prompt("what is your favorite animal? ");
let showAnimal = false; // 1. Global variable to control visibility

// 2. Check if the animal is "piggo"
if (animal !== null && (Number(animal) === 1 || animal.toLowerCase() === "piggo")) {
  alert("oink");
  showAnimal = true; // 3. Set to true for valid input
} 


function setup() {
  createCanvas(400, 400);
}

function draw() { // Drawing logic moved to draw loop
  if (showAnimal) { // 5. Only draw if showAnimal is true
    background("blue");
    fill("pink");
    ellipse(202, 208, 300, 300);
    // Add code for eyes and mouth here
    // ...
  } 
}


function oink() {
  // Initialize the Howl object with your sound file(s)
  /* ... (rest of your oink function code) ... */
}


// New function to house the createCanvas code
function createCanvasAfterDelay() {}




// 3. Check if the animal is "quack" (this is a separate check)
if (Number(animal) === 2 || animal.toLowerCase() === "quack") {
  alert("quack");
  function setup() {
    createCanvas(400, 400);
    background("blue"); 
    fill(255, 255, 0); 
    ellipse(200, 250, 200, 150);
    
    ellipse(200, 150, 100, 100);
   
    fill(255, 165, 0); // Orange color in RGB
    triangle(200, 150, 230, 140, 230, 160);
    // Eye (small white/black ellipse)
    fill(255); // White color
    ellipse(180, 140, 15, 15);
    fill(0); // Black color
    ellipse(180, 140, 5, 5);
  }
  
function quack() {
  // Initialize the Howl object with your sound file(s)
  sound = new Howl({
    src: ['quack.m4a'], // Howler supports multiple formats for compatibility: true
  });
  alert("quack")
}

function mousePressed(){
  quack();
 
  sound.play();
  setTimeout(createCanvasAfterDelay, 1000);
}

// New function to house the createCanvas code
function createCanvasAfterDelay() {
  createCanvas(400, 400);
}
}
//quack


if (Number(animal) === 3 || animal.toLowerCase() === "human") {
  alert("hello i am winstin");
  // P5.js functions should be outside of the prompt logic
  function setup() {
    createCanvas(400, 400);
    background("blue");
    noStroke();

// face
fill(255, 255, 0);
ellipse(202, 208, 300, 300);

// eyes
fill(0, 0, 0);
ellipse(157, 151, 40, 40);
ellipse(304, 142, 40, 40);

// mouth
fill(255, 0, 0);
ellipse(257, 240, 120, 136);

// headband
strokeWeight(33);
stroke(250, 0, 242);
line(83, 116, 271, 74);


   
  }
  
function human() {
  // Initialize the Howl object with your sound file(s)
  sound = new Howl({
    src: ['human.m4a'], // Howler supports multiple formats for compatibility: true
  });
  alert("hello")
}

function mousePressed(){
  human();
 
  sound.play();
  setTimeout(createCanvasAfterDelay, 13000);
}

// New function to house the createCanvas code
function createCanvasAfterDelay() {
  createCanvas(1000, 1000);
}



}
else {alert ("sorry we dont have that")}
// mouth
ellipse(200, 240, 120, 136);
//Ears
triangle(50, 150, 100, 50, 150, 100);
triangle(250, 100, 300, 50, 350, 150)


function oink() {
// Initialize the Howl object with your sound file(s)
sound = new Howl({
src: ['piggo.m4a'], // Howler supports multiple formats for compatibility: true
});
alert("piggo")
}

function mousePressed() {
oink();
sound.play();
}

// 3. Check if the animal is "quack" (this is a separate check)
if (animal.toLowerCase() === "quack") {
alert("quack");

function setup() {
createCanvas(400, 400);
background("blue"); // You can change the background color if you like
// Duck body (yellow ellipse)
fill(255, 255, 0); // Yellow color in RGB
ellipse(200, 250, 200, 150);
// Duck head (yellow ellipse)
ellipse(200, 150, 100, 100);
// Beak (orange triangle)
fill(255, 165, 0); // Orange color in RGB
triangle(200, 150, 230, 140, 230, 160);
// Eye (small white/black ellipse)
fill(255); // White color
ellipse(180, 140, 15, 15);
fill(0); // Black color
ellipse(180, 140, 5, 5);
}
}
 quack;
