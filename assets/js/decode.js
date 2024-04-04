function decodeString(encodedString) {
    var result = ""; 
    var key = parseInt(encodedString.substr(0, 2), 16);
    
    for (var n = 2; n < encodedString.length; n += 2) {
        result += String.fromCharCode(parseInt(encodedString.substr(n, 2), 16) ^ key);
    }
    
    return result;
}

function formatPhoneNumber(phoneNumber) {
    return phoneNumber.substr(0,3) + " " +
        phoneNumber.substr(3,2) + " " +
        phoneNumber.substr(5,2) + " " +
        phoneNumber.substr(7,2) + " " +
        phoneNumber.substr(9,2);
}

function updateLink(link) {
    var s = link.dataset.encoded.split(":");
    
    s[1] = decodeString(s[1]);
    link.href = s[0] + ":" + s[1];
    link.textContent = s[0] === "tel" ? formatPhoneNumber(s[1]) : s[1];
    delete link.dataset.encoded;
}

function decodeLinks() {
    var links = document.querySelectorAll("[data-encoded]");

    for (var i = 0; i < links.length; i++) {
        updateLink(links[i]);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    decodeLinks();
});
