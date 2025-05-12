let SpeechRecognition = window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event) {
    let content = event.result[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;

}