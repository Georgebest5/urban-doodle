image ="" ;

function preload() {
    image=createImage('background.jpg');
    image.hide();
}
function setup() {
    canvas=createCanvas(480, 380);
    canvas.center();
}
function draw(){
    image(image,0,0,480,380);
    if(status_1 !="")
    {
        objectDetector.detect(image, gotResult);
        for (i=0; i< objects.length; i++) {
            document.getElementById("status").innerHTML="Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objaects detected are :"+objects.length;
            fill("#FF0000");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x +15,objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width,objects[i].height ); 
        }
    }
}
function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML= "Status : Detecting Objects";
}
 function modelLoaded() {
    console.log ("Model Loaded!");
    status_1=true;
 }
 function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
 }