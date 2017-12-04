
let wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    backend: 'MediaElement',
    progressColor: '#8e3cfe',
    barWidth: 0,
    height: 16,
    scrollParent: false,
    fillParent: true,
    hideScrollbar: true,
    normalize: true
});

wavesurfer.loaded = false;

wavesurfer.backend.peaks = [0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000];
