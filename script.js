// ===========================
// LOADER
// ===========================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});


// ===========================
// SCROLL PROGRESS BAR
// ===========================
window.addEventListener("scroll", () => {
    const progressBar = document.getElementById("progressBar");
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrolled + "%";
});


// ===========================
// DARK / LIGHT MODE TOGGLE
// ===========================
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // icon change
    if (document.body.classList.contains("dark")) {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});


// ===========================
// MOBILE MENU TOGGLE
// ===========================
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// ===========================
// TYPING EFFECT
// ===========================
const typingText = document.querySelector(".typing");

const roles = [
    "Frontend Developer",
    "Flutter Developer",
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentRole.substring(0, charIndex);

    let speed = isDeleting ? 80 : 120;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = 1500;
        isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ===========================
// COUNTER ANIMATION (STATS)
// ===========================
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 30);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});


// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
const contactForm = document.getElementById("contactForm");
const popup = document.getElementById("popupBox");

contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    // fake send effect (UI only)
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);

    contactForm.reset();
});