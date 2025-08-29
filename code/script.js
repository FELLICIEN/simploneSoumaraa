
// Script pour gérer la soumission du formulaire de réservation
document.getElementById('reservationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Merci pour votre réservation! Nous vous contacterons rapidement pour confirmer.');
    this.reset();
});

