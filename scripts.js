// Scroll de âncora e controle (#hash)
document.querySelectorAll('[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Menu Hamburger

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const icon = document.querySelector('i');

function openMenu() {
    navMenu.classList.add('active');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
}

function closeMenu() {
    navMenu.classList.remove('active');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
}

hamburger.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    })
})

// Hero Card
const results = document.querySelectorAll('.result-item');
const indicator = document.querySelectorAll('.indicator');

let currentIndex = 0;

function nextResult() {
    results[currentIndex].classList.remove("active");
    indicator[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % results.length;
    
    results[currentIndex].classList.add("active");
    indicator[currentIndex].classList.add("active");
}

//Autoplay
setInterval(nextResult, 5000);


//Animation
document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".reveal, .reveal-right, reveal-left");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el))
});