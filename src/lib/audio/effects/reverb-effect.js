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

        this.delay1 = this.audioContext.createDelay();
        this.delay2 = this.audioContext.createDelay();
        this.feedback = this.audioContext.createGain();

        this.delay1.delayTime.value = 0.1;
        this.delay2.delayTime.value = 0.2;
        this.feedback.gain.value = 0.5;

        this.input.connect(this.gain);
        this.gain.connect(this.delay1);
        this.delay1.connect(this.feedback);
        this.feedback.connect(this.delay1);
        this.delay1.connect(this.delay2);
        this.delay2.connect(this.output);
        this.input.connect(this.output);
    }
}

export default ReverbEffect;
