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
        this.delay3 = this.audioContext.createDelay();
        this.feedback1 = this.audioContext.createGain();
        this.feedback2 = this.audioContext.createGain();
        this.feedback3 = this.audioContext.createGain();

        this.delay1.delayTime.value = 0.1;
        this.delay2.delayTime.value = 0.2;
        this.delay3.delayTime.value = 0.3;
        this.feedback1.gain.value = 0.5;
        this.feedback2.gain.value = 0.3;
        this.feedback3.gain.value = 0.2;

        this.input.connect(this.gain);
        this.gain.connect(this.delay1);
        this.gain.connect(this.delay2);
        this.gain.connect(this.delay3);

        this.delay1.connect(this.feedback1);
        this.feedback1.connect(this.delay1);
        this.delay1.connect(this.output);

        this.delay2.connect(this.feedback2);
        this.feedback2.connect(this.delay2);

        this.delay3.connect(this.feedback3);
        this.feedback3.connect(this.delay3);
        
        this.delay1.connect(this.output);
        this.delay2.connect(this.output);
        this.delay3.connect(this.output);
    }
}

export default ReverbEffect;
