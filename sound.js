class Sound{
    constructor(name, filename, volume = 1.0){
        this.name = name;
        this.filename = filename;
        this.volume = volume;
    }
    playSound(){
        let audioElement = new Audio('sounds/'+this.filename);
        audioElement.volume = this.volume;
        audioElement.play();
    }
}