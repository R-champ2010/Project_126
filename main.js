sunflower="";
bel="";

function preload(){
    sunflower=loadMusic("Post Malone Swae Lee  Sunflower SpiderMan Into the SpiderVerse.mp3");
    bel=loadMusic("Imagine Dragons - Believer.mp3");
}

function setup(){
    canvas=createCanvas(700,600);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 700, 600);
}

