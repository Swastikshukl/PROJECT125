function setup(){
    canvas=createCanvas(550, 550);
    canvas.position(560, 150);

    video=createCapture(VIDEO);
    video.size(550, 550);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}
function modelLoaded(){
    console.log('posenet is inizialised');

}
function draw(){
    background('#FFC0CB');
    fill('#F90093');
    stroke('#F90093');
    textSize(difference);
    text('swastik',50,400);
    
}
function gotposes(results){
if(results.leangth>0){
    console.log(results);
    noseX=results[0].pose.nose.X;
      noseY=results[0].pose.nose.Y;
      console.log("noseX="+noseX +"noseY="+noseY);
      leftwristX=results[0].pose.leftwrist.X;
      rightwristX=results[0].pose.rightwrist.X;
      difference=floor(leftwristX-rightwristX);
      console.log("leftwristX="+leftwristX+"rightwristX="+rightwristX+"difference="+difference);

}
}
noseX=0;
noseY=0;
leftwristX=0;
rightwristX=0;
difference=0;
