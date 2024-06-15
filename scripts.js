// Getting the Go to Top button:
let scrollBtn = document.getElementById("goTop")


// Showing button when the user scrolls down 100px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// Scroll to the top of the document when the button is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Dark/Light Mode Switch
const btnSwitch = document.querySelector('#switch');
const sections = document.querySelectorAll('.profile, .timeline, .outer, .card2, .card2-footer-container, .title, .icon');

// Switching each section
btnSwitch.addEventListener('click', () => {
    btnSwitch.classList.toggle('active');
    document.body.classList.toggle('dark');
    sections.forEach(sections => {
        sections.classList.toggle('dark');
    });

    // Save Dark/Light Mode State in LocalStorage
    if (document.body.classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'true');
    } else {
    localStorage.setItem('dark-mode', 'false');
    }
});

//Current Dark/Light Mode State
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    sections.forEach(sections => {
        sections.classList.add('dark');
    });
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    sections.forEach(sections => {
        sections.classList.remove('dark');
    });
    btnSwitch.classList.remove('active');
}