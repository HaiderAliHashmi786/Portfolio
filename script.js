// ===========================
// LOADER
// ===========================
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// ===========================
// SCROLL PROGRESS BAR
// ===========================
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width = (scrollTop / scrollHeight) * 100 + "%";
});

// ===========================
// DARK MODE
// ===========================
const themeToggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

});

// ===========================
// MOBILE MENU
// ===========================
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");

menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
        nav.classList.remove("active");
    }
});

// ===========================
// TYPING EFFECT
// ===========================
const typing = document.querySelector(".typing");

const roles = [
    "Frontend Developer",
    "Flutter Developer"
];

let role = 0;
let char = 0;
let deleting = false;

function type() {

    const current = roles[role];

    typing.textContent = current.substring(0, char);

    if (!deleting) {
        char++;
    } else {
        char--;
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && char > current.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && char < 0) {
        deleting = false;
        role = (role + 1) % roles.length;
        speed = 400;
    }

    setTimeout(type, speed);
}

type();

// ===========================
// COUNTER ON SCROLL
// ===========================
const counters = document.querySelectorAll(".counter");
const stats = document.querySelector(".stats");

let started = false;

window.addEventListener("scroll", () => {

    if (started) return;

    if (window.scrollY > stats.offsetTop - 350) {

        started = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;
            let count = 0;

            const update = () => {

                const increment = Math.ceil(target / 100);

                count += increment;

                if (count >= target) {
                    counter.innerText = target;
                    return;
                }

                counter.innerText = count;

                setTimeout(update, 20);

            };

            update();

        });

    }

});

// ===========================
// ACTIVE NAV LINK
// ===========================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        if (scrollY >= section.offsetTop - 170) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===========================
// CONTACT FORM
// ===========================
const contactForm = document.getElementById("contactForm");
const popup = document.getElementById("popupBox");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    popup.style.display = "block";
    popup.style.opacity = "1";

    setTimeout(() => {

        popup.style.opacity = "0";

        setTimeout(() => {
            popup.style.display = "none";
        }, 400);

    }, 2500);

    contactForm.reset();

});