function preload(){
    img=loadImage('tv.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
img="";
status="";

function modelLoaded(){
    console.log("Model Loaded")
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(){
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image (img, 0, 0, 640, 420);
    fill("#FF0000");
    text("TV", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 200);
}

