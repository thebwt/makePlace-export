document.addEventListener('DOMContentLoaded', function() {
    var countdownElement = document.getElementById('countdown');
    var countdown = parseInt(countdownElement.textContent, 10);
    var interval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = 'https://makeplace-export.thebwt.com';
        }
    }, 1000);
});
