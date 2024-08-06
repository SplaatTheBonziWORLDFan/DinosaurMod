// reverb effect is currently work in progress.

class ReverbEffect {
    constructor(audioContext, impulseResponseUrl, startTime, endTime) {
        this.audioContext = audioContext;
        this.input = this.audioContext.createGain();
        this.output = this.audioContext.createGain();

        this.effectInput = this.audioContext.createGain();
        this.effectInput.gain.value = 0;

        this.effectInput.gain.setValueAtTime(0.75, startTime);
        this.effectInput.gain.setValueAtTime(0, endTime);

        this.convolver = this.audioContext.createConvolver();

        // Load the impulse response from the given URL
        this.loadImpulseResponse(impulseResponseUrl);

        this.input.connect(this.effectInput);
        this.effectInput.connect(this.convolver);
        this.convolver.connect(this.output);
        this.input.connect(this.output);
    }

    async loadImpulseResponse(url) {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        this.convolver.buffer = audioBuffer;
    }
}

export default ReverbEffect;