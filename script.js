// script.js
// the main script containing the main logic of the website
// coders: Luke Ren,

// define global variables

let ticker = new Ticker();
let mainCanvas;
let canvasContext;
let instruments;
let mode = "inputting";

function setup(){
    mainCanvas = document.getElementById("main-canvas");
    mainCanvas.width = window.innerWidth;
    mainCanvas.width = 850
    mainCanvas.height = window.innerHeight;
    canvasContext = mainCanvas.getContext("2d");
    canvasContext.beginPath();
    canvasContext.fillStyle= "grey"
    canvasContext.fillRect(100,100,750,500);
    canvasContext.stroke();
    instruments = new Instruments();
    createInstrumentLabels(instruments.getInstruments());
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

function debug_PlayRiff(){

    //remove later

    setTimeout(()=>{instruments.playInstrument('kick')}, 0);
    setTimeout(()=>{instruments.playInstrument('hihat')}, 200);
    setTimeout(()=>{instruments.playInstrument('snare')}, 400);
    setTimeout(()=>{instruments.playInstrument('hihat')}, 600);
    setTimeout(()=>{instruments.playInstrument('kick')}, 800);
    setTimeout(()=>{instruments.playInstrument('hihat')}, 1000);
    setTimeout(()=>{instruments.playInstrument('snare')}, 1200);
    setTimeout(()=>{instruments.playInstrument('hihat')}, 1400);
}

function play_kick(){

    setTimeout(()=>{instruments.playInstrument('kick')}, 0);
}

function play_snare(){

    setTimeout(()=>{instruments.playInstrument('snare')}, 0);
    }

function play_HiHat(){

    setTimeout(()=>{instruments.playInstrument('hihat')}, 0);
    }