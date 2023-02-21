

//treinamento do projeto

prediction_1 = ""; 
prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    imageFormat:'png',
    pngQualit:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementByld("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aiRv_zyH4/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded:');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "A primeira previsão é " + prediction_1;
    speak_data_2 = "A segunda previsão é " + prediction_2;
    var utterThis = new SpeechSynthesisUtterrance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}


function check()
{
    img = document.getElementByld('captured_image');
    classifier.classify(img, gotResult);
}


function gotResult(error, results) {
if(error) {
    console.error(error);
} else{
    console.log(results);
    document.getElementByld("result_emotion_name").innerHTML = result[0].label;
    document.getElementByld("result_emotion_name2").innerHTML = result[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if(results[0].label == "Ok")
{
    document.getElementByld("update_emoji").innerHTML = "&#128522;";
}
if(results[0].label == "Yeah-Yeaah")
{
    document.getElementByld("update_emoji").innerHTML = "&#128532;";
}
if(results[0].label == "Joinha")
{
    document.getElementByld("update_emoji").innerHTML = "&#128522";
}

}
}