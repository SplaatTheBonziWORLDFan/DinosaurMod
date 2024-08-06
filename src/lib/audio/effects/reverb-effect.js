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
        this.delay4 = this.audioContext.createDelay();

        this.delay1.delayTime.value = 0.03;
        this.delay2.delayTime.value = 0.06;
        this.delay3.delayTime.value = 0.09;
        this.delay4.delayTime.value = 0.12;

        this.feedback1 = this.audioContext.createGain();
        this.feedback2 = this.audioContext.createGain();
        this.feedback3 = this.audioContext.createGain();
        this.feedback4 = this.audioContext.createGain();
        
        this.feedback1.gain.value = 0.5;
        this.feedback2.gain.value = 0.4;
        this.feedback3.gain.value = 0.3;
        this.feedback4.gain.value = 0.2;

        this.filter1 = this.audioContext.createBiquadFilter();
        this.filter2 = this.audioContext.createBiquadFilter();

        this.filter1.type = 'lowpass';
        this.filter1.frequency.value = 5000;

        this.filter2.type = 'highpass';
        this.filter2.frequency.value = 500;

        this.input.connect(this.gain);
        this.gain.connect(this.delay1);
        this.gain.connect(this.delay2);
        this.gain.connect(this.delay3);
        this.gain.connect(this.delay4);

        this.delay1.connect(this.feedback1);
        this.feedback1.connect(this.delay1);
        this.delay1.connect(this.filter1);
        this.filter1.connect(this.output);

        this.delay2.connect(this.feedback2);
        this.feedback2.connect(this.delay2);
        this.delay2.connect(this.filter1);
        this.filter1.connect(this.output);

        this.delay3.connect(this.feedback3);
        this.feedback3.connect(this.delay3);
        this.delay3.connect(this.filter2);
        this.filter2.connect(this.output);

        this.delay4.connect(this.feedback4);
        this.feedback4.connect(this.delay4);
        this.delay4.connect(this.filter2);
        this.filter2.connect(this.output);
    }
}

export default ReverbEffect;
