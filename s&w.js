var startTime, updatedTime, difference, tInterval;
var running = false;

function start() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 10);
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    document.getElementById('display').textContent = "0.00";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = (updatedTime - startTime) / 1000;
    document.getElementById('display').textContent = difference.toFixed(2);
}
