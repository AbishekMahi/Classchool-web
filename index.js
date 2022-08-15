// Day and Night
var daynight = document.getElementById("daynight");
daynight.onclick = function () {
    document.body.classList.toggle("dark_mode");
    if (document.body.classList.contains("dark_mode")) {
        daynight.src = "images/sun.png"
        logo.src = "images/logoclr.png"
        logodown.src = "images/logoclr.png"

    } else {
        daynight.src = "images/moon.png"
        logo.src = "images/logowhite.png"
        logodown.src = "images/logowhite.png"
    }
}
//Back To Top:
mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js');
    });
}