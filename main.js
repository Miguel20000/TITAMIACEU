var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
recognition.onresult = function(event) {
console.log(event); 
var Content = event.results[0][0].transcript;
 Textbox.innerHTML = Content;
    console.log(Content);
    if(Content == "tire minha selfie")
    {
        console.log("tirando selfie --- ");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    //speakData = "tirando sua selfie em 5 segundos";
    speak_data = "Tirando sua selfie em 5 segundos";
    //var utterThis = new SpeechSynthesisUtterance(speakData); 
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    //webcam.attach(camera);
    Webcam.attach(camera);

    setTimeout(function() { 
        //takeSelfie();
        take_selfie(); 
        save();
    }, 5000);
    }
    camera = document.getElementById("camera");
    Webcam.set({
        width:360,
        height:250,
        image_format : 'png',
        png_quality:90
    });

    //function takeSelfie()
    function take_selfie()
    {
     //webcam.snap(function(data_uri){
     Webcam.snap(function(data_uri) {
      //document.getElementById("result").innerHTML='<img id="selfieImage" src="'+data_uri+'"/>';
      document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
       });
    }
    function save()
    {
        link = document.getElementById("link");
        //image = document.getElementById("selfieImage").src;
        image = document.getElementById("selfie_image").src ;
        link.href = image;
        link.click();
    }
