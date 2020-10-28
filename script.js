// script.js
// the main script containing the main logic of the website
// coders: Luke Ren,

// define global variables

let ticker = new Ticker();
let mainCanvas;
let canvasContext;

function setup(){
    mainCanvas = document.getElementById("main-canvas");
    canvasContext = mainCanvas.getContext("2d");
    canvasContext.beginPath();
    canvasContext.rect(20,20,150,100);
    canvasContext.stroke();
}

function update(progress) {
    // Update the state of the world for the elapsed time since last render
    // progress is how long since the last render (in milliseconds)
    ticker.update();
}

function draw() {
    // Draw the state of the world
    ticker.draw();
}
  
