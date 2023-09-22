// Set a cookie with a name, value, and expiration date
function setCookie(UserCookie, UserCookievalue, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = UserCookie + "=" + UserCookievalue + ";" + expires + ";path=/";
}

// Example usage:
setCookie("UserCookie", "accepted", 365); // Set a cookie named "userConsent"



// Get the value of a cookie by its name
function getCookie(UserCookie) {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const parts = cookie.split("=");
        const cookieName = parts[0].trim();
        if (cookieName === UserCookie) {
            return parts[1];
        }
    }
    return null; // Cookie not found
}

// Example usage:
const userConsent = getCookie("userConsent"); // Retrieve the value of the "userConsent" cookie


// Delete a cookie by setting its expiration date to the past
function deleteCookie(UserCookie) {
    document.cookie = UserCookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Example usage:
deleteCookie("UserCookie"); // Delete the "userConsent" cookie