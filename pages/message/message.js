var playing = true;
function mute(){
    playing = !playing;
    console.log(playing)
    if (playing){
        document.getElementById("sound").textContent = "volume_up"
        document.getElementById("audio").volume = 1
    } else {
        document.getElementById("sound").textContent = "volume_off"
        document.getElementById("audio").volume = 0
    }
}