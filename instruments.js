class Instruments{
    constructor() {
        this.instruments = {
            'kick': new Sound('kick','kick.wav'),
            'snare': new Sound('snare','snare.wav'),
            'hihat': new Sound('hihat','hihat.wav'),
        }
    }
    getInstruments()
    {
        return Object.keys(this.instruments);
    }
    playInstrument(name){
        this.instruments[name].playSound();
    }
}