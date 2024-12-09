
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.main-header');

// Ouvrir/fermer le menu burger
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu burger lorsqu'on clique en dehors
document.addEventListener('click', (event) => {
    if (!burger.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Changer la couleur du burger menu selon le scroll
window.addEventListener('scroll', () => {
    const headerHeight = header.offsetHeight;
    if (window.scrollY > headerHeight) {
        burgerMenu.classList.add('blue'); // Ajouter la classe pour le style bleu
    } else {
        burgerMenu.classList.remove('blue'); // Supprimer la classe pour revenir au blanc
    }
});

document.addEventListener("DOMContentLoaded", () => {
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, percentageScroll = 100) => {
const elementTop = el.getBoundingClientRect().top;

return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
);
};

const displayScrollElement = (element) => {
element.classList.add('show');
};

const hideScrollElement = (element) => {
element.classList.remove('show');
};

const handleScrollAnimation = () => {
scrollElements.forEach((el) => {
    if (elementInView(el, 75)) {
        displayScrollElement(el);
    } else {
        hideScrollElement(el);
    }
});
};

window.addEventListener('scroll', () => {
handleScrollAnimation();
});

handleScrollAnimation();
});

document.addEventListener("DOMContentLoaded", () => {
const sections = document.querySelectorAll("section");
const body = document.body;

const sectionColors = [
"var(--light-gray)", // Couleur pour la deuxième section
"var(--light-gray)", // Couleur pour la deuxième section
"var(--light-gray)", // Couleur pour la troisième section
"black", // Couleur pour la quatrième section
"var(--light-gray)",// Couleur pour la dernière section
"var(--light-gray)", // Couleur pour la quatrième section

];

const updateBodyColor = () => {
let scrollPosition = window.scrollY + window.innerHeight / 2;

sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Change la couleur de l'arrière-plan et du texte
        body.style.backgroundColor = sectionColors[index];
        body.style.color = index % 2 === 0 ? "var(--dark-gray)" : "var(--white)";
    }
});
};

window.addEventListener("scroll", updateBodyColor);
updateBodyColor(); // Initialisation pour définir la couleur correcte au chargement
});
document.addEventListener("DOMContentLoaded", () => {
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, percentageScroll = 100) => {
const elementTop = el.getBoundingClientRect().top;

return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
);
};

const displayScrollElement = (element) => {
element.classList.add('show');
};

const hideScrollElement = (element) => {
element.classList.remove('show');
};

const handleScrollAnimation = () => {
scrollElements.forEach((el) => {
    if (elementInView(el, 75)) {
        displayScrollElement(el);
    } else {
        hideScrollElement(el);
    }
});
};

window.addEventListener('scroll', () => {
handleScrollAnimation();
});

// Initial check to display elements already in view
handleScrollAnimation();
});


document.addEventListener("DOMContentLoaded", () => {
const scrollElements = document.querySelectorAll('.scroll-animate');

const elementInView = (el, percentageScroll = 100) => {
const elementTop = el.getBoundingClientRect().top;

return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
);
};

const displayScrollElement = (element) => {
element.classList.add('show');
};

const hideScrollElement = (element) => {
element.classList.remove('show');
};

const handleScrollAnimation = () => {
scrollElements.forEach((el) => {
    if (elementInView(el, 75)) {
        displayScrollElement(el);
    } else {
        hideScrollElement(el);
    }
});
};

window.addEventListener('scroll', () => {
handleScrollAnimation();
});

handleScrollAnimation();
});











