Webcam.set({
    width:350,
    height:350,
    image_format:'jpg',
    jpg_quality:100
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function click(){
    Webcam.snap(function(img){
        document.getElementById("result").innerHTML='<img id="captured" src="'+img+'">';
    });
}
console.log(ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/zjMARzZNz/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model is Loaded")
}

function identify(){
    img=document.getElementById("captured");
    classifier.classify(img,gotResult)
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label
        document.getElementById("objectAccuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}