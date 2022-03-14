noseX=0;
noseY=0;


function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}

function draw(){
image(video,0,0,300,300);
fill()
}

function modelloaded(){
    console.log("posenet is initialized");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function take_snapshot(){
    save('my_filter_image.png');
}




