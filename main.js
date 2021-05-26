NoseX = 0;
NoseY = 0;
LeftwristX = 0;
RightwristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400, 400);
    canvas = createCanvas(400, 400);
    canvas.position(460, 150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPose);
}

function modelLoaded() {
    console.log('Model Losded!');
}

function gotPose(results) {
    if (results.length > 0) {
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;

        LeftwristX = results[0].pose.leftWrist.x;
        RightwristX = results[0].pose.rightWrist.x;
        difference = floor(LeftwristX - RightwristX)
    }
}

function draw() {
    background('#428af5');
    fill('#ff0000');
    stroke("#ff0000");
    text("DevadathanB", NoseX, NoseY, );
    textSize(difference);
    document.getElementById('font_side').innerHTML = 'Side length of font will be =' + difference + 'px';
}