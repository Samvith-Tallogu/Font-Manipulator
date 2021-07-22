function preload() {}
function setup() {
    canvas = createCanvas(450, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 350);
    video.position(50, 245);
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
    }
}

function modelloaded(){
    console.log('Model is loaded');
}



function draw() {
    background('#E34234');
}