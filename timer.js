function startCountdown() {
    var seconds = parseInt(document.getElementById('seconds').value);
    var display = document.getElementById('timer-display');

    function updateTimer() {
        display.textContent = 'Преостанати секунди: ' + seconds;
        if (seconds <= 0) {
            clearInterval(timer);
            display.textContent = 'Времето истече!';
        }
        seconds--;
    }

    var timer = setInterval(updateTimer, 1000);
}

