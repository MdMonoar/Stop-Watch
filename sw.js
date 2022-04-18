// Stopwatch()

// sw.
// duration // property
// reset // method
// start // method
// stop // method

// // inherited from base object

// constructor
// hasOwnProperty
// isPrototypeOf
// propertyIsEnumerable
// toLocaleString
// toString
// valueOf

function stopWatch() {
    let start = Date.now();
    const startMark = 'startMark'
    const stopMark = 'stopMark'

    this.duration = function() {
        // dur = startMark - stopMark ;
        dur = performance.measure('dur', startMark, stopMark);
        dur = dur.duration/1000;
        console.log(dur.toFixed(3));
    };

    this.start = function() {
        if (start == 1)
            throw new Error('Stop Watch already started!');
        performance.mark(startMark);
        start = 1;
        stop = 0;
        // return startMark;
    };
    this.stop = function() {
        if (stop == 1)
            throw new Error('Stop Watch already stopped!');
        performance.mark(stopMark);
        start = 0;
        stop = 1;
        // return stopMark;
    };
};
const sw = new stopWatch();
