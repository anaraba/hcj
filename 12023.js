document.addEventListener("DOMContentLoaded", function () {
    // Избор на случаен број од 1 до 10 при вчитување на страната
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    var attempts = 0;

    document.getElementById("guessButton").addEventListener("click", function () {
        // Зголемување на бројот на обиди
        attempts++;  //sekoj pat koga kje se klikni na kopceto ++ obid

        // Превземање на бројот внесен од корисникот
        var userGuess = parseInt(document.getElementById("guessInput").value);  //go pret vo int 
        var message = "";

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            message = "Внесете валиден број од 1 до 10!";
        } else if (userGuess === randomNumber) {
            message = "Честитки! Го погодивте бројот за " + attempts + " обиди.";
        } else if (userGuess < randomNumber) {
            message = "Пробајте со поголем број!";
        } else {
            message = "Пробајте со помал број!";
        }

        document.getElementById("message").textContent = message;

        if (userGuess === randomNumber) {
            document.getElementById("attempts").textContent = "Обиди: " + attempts;
        }
    });
});
