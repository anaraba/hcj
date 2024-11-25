document.getElementById('car-survey').addEventListener('submit', function(event) {
    event.preventDefault();   //go sprecuva standardnoto t.e da se ipratat podatocite i da se osvezi stranicata
    alert('Thank you for participating in the survey!');   //se pojavuva poraka
    window.location.href = 'koli.html';   //ne nosi na koli.html
});
