var lastScroll = 0;
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    if (lastScroll < window.pageYOffset) {
        //hiding the navbar
        if (window.pageYOffset > 200)
            navbar.style.top = '-100px';
    } else {
        navbar.style.top = 0;
    }
    lastScroll = window.pageYOffset;
})