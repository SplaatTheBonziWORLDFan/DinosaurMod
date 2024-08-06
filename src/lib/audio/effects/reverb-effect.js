// reverb effect is currently work in progress.

class ReverbEffect {
    constructor(audioContext, startTime, endTime) {
        this.audioContext = audioContext;
        this.input = this.audioContext.createGain();
        this.output = this.audioContext.createGain();

        this.gain = this.audioContext.createGain();
        this.gain.gain.value = 0;

        this.gain.gain.setValueAtTime(0.75, startTime);
        this.gain.gain.setValueAtTime(0, endTime);

        this.convolver = this.audioContext.createConvolver();

        this.input.connect(this.gain);
        this.gain.connect(this.convolver);
        this.input.connect(this.output);
    }
}

export default ReverbEffect;