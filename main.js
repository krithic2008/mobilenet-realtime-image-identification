function setup() {
  canvas = createCanvas(230,230);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet",
    function (){
        console.log("model loaded")
    })
}
function draw(){
  image(video,0,0,230,230)
  classifier.classify(video,find_object)
}
function find_object(error,object){
  if(error){
    consolelog(error);
  }
  else{
    console.log(object);
    document.getElementById("object_result").innerHTML=object[0].label;
    document.getElementById("object_accuracy").innerHTML=object[0].confidence.toFixed(2);
  }

}


