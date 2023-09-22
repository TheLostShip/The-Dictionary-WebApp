document.addEventListener('DOMContentLoaded', function () {
    const consentBanner = document.getElementById('cookie-consent-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const declineButton = document.getElementById('decline-cookies');

    // Check if user has previously consented
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        consentBanner.style.display = 'none'; // Hide the banner if user has already consented
    } else {
        consentBanner.style.display = 'block'; // Show the banner if user hasn't consented yet

        // Event listener for accepting cookies
        acceptButton.addEventListener('click', function () {
            localStorage.setItem('cookieConsent', 'accepted'); // Set a cookie to remember user's choice
            consentBanner.style.display = 'none'; // Hide the banner
        });

        // Event listener for declining cookies
        declineButton.addEventListener('click', function () {
            // Implement your logic for handling declined cookies (e.g., disabling some features)
            localStorage.setItem('cookieConsent', 'declined');
            consentBanner.style.display = 'none'; // Hide the banner
        });
    }
});



