function Stopwatch() {
    let start, stop = 0;
    const startMark = 'startMark'
    const stopMark = 'stopMark'


    this.start = function() {
        if (start == 1)
            throw new Error('Stop Watch already started!');
        performance.mark(startMark);
        start = 1;
        stop = 0;
    };
    this.stop = function() {
        if (stop == 1)
            throw new Error('Stop Watch is not started!');
        performance.mark(stopMark);
        start = 0;
        stop = 1;

        duration = performance.measure('duration', startMark, stopMark).duration/1000;
        
    };
    this.reset = function() {
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}
    });
};
