var i = 0;
var txt = "Welcome to UofT Apex Legends.";
var speed = 50

export function typinganimation(){
    document.getElementById("greeting-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typinganimation, speed)
}