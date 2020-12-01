/* play_NewRiff() is a placeholder because I haven't figured out 
what I'm supposed to do with the play buttone to make it play
any riff that might be made; abstraction is hard*/
// delete comment later
function play_NewRiff(){
    
    if (mode === "playing") {  
        debug_PlayRiff()
        setTimeout(()=>{play_NewRiff()}, 1600);
    }
}

function change_Mode() {
    if (mode === "inputting") {
        mode = "playing"
        console.log(mode);
    }
    else {
        mode = "inputting" 
        console.log(mode);
    }
    play_NewRiff();
}