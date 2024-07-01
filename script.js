// Fonction pour masquer toutes les sections
function hideAllSections() {
    const sections = document.querySelectorAll('.intro, .aproposdemoi, .parcours, .experience, .plustard, .contact');
    sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
}

// Fonction pour changer de section avec animation
function changeSection(event, sectionId) {
    event.preventDefault();

    // Sélection de la nouvelle section
    const newSection = document.getElementById(sectionId);

    // Vérification si la nouvelle section est déjà active
    if (newSection.classList.contains('active')) {
        return;
    }

    // Masquer toutes les sections et supprimer la classe 'active'
    hideAllSections();

    // Afficher la nouvelle section après un délai pour s'assurer que la transition se fait en douceur
    setTimeout(() => {
        newSection.style.display = 'flex';

        // Ajouter la classe 'active' à la nouvelle section après un délai pour déclencher l'animation de fondu
        setTimeout(() => {
            newSection.classList.add('active');
        }, 50); // Laisser un petit délai pour que l'élément s'affiche avant l'animation d'opacité
    }, 50); // Délai pour s'assurer que la transition initiale se fait en douceur dès le premier clic

    // Mettre à jour l'état des bulles de navigation
    updateNavigationBubbles(sectionId);
}

function showParcours(sectionId) {
    const sections = document.querySelectorAll('.parcours-section');
    const buttons = document.querySelectorAll('.parcours-btn');
    let currentSection = document.querySelector('.parcours-section.show');

    // Si une section est actuellement affichée, la masquer d'abord
    if (currentSection) {
        currentSection.classList.remove('active');
        setTimeout(() => {
            currentSection.classList.remove('show');
            showNewSection(sectionId);
        }, 500); // Durée de la transition (doit correspondre à la durée dans le CSS)
    } else {
        showNewSection(sectionId);
    }

    buttons.forEach(button => {
        if (button.id === `btn-${sectionId.split('-')[0]}`) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function showNewSection(sectionId) {
    const newSection = document.getElementById(sectionId);
    newSection.classList.add('show');
    setTimeout(() => {
        newSection.classList.add('active');
    }, 10); // Léger délai pour s'assurer que le changement de display est traité
}

document.getElementById('btn-scolaire').addEventListener('click', () => showParcours('scolaire-content'));
document.getElementById('btn-professionnel').addEventListener('click', () => showParcours('professionnel-content'));

document.addEventListener('DOMContentLoaded', () => {
    showParcours('scolaire-content');
});





// Mettre à jour l'état des bulles de navigation
function updateNavigationBubbles(sectionId) {
    const navItems = document.querySelectorAll('.nav-item');

    // Réinitialiser tous les états des bulles de navigation
    navItems.forEach(item => {
        item.style.transform = 'scale(1)';
    });

    // Trouver l'index de la section active
    const activeIndex = Array.from(navItems).findIndex(item => item.getAttribute('href') === `#${sectionId}`);

    // Grossir le bouton sélectionné
    if (activeIndex !== -1) {
        navItems[activeIndex].style.transform = 'scale(1.5)';
    }
}

// Appliquer le grossissement initial sur le premier élément de navigation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems.length > 0) {
        navItems[0].style.transform = 'scale(1.5)';
    }
});

document.querySelectorAll('.milestone').forEach(milestone => {
    milestone.addEventListener('mouseenter', () => {
        const content = milestone.querySelector('.milestone-content');
        content.style.transform = 'translateY(-20px)';
    });

    milestone.addEventListener('mouseleave', () => {
        const content = milestone.querySelector('.milestone-content');
        content.style.transform = 'translateY(0)';
    });
});

document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const content = item.querySelector('.timeline-content');
        content.style.transform = 'scale(1.05)';
        content.style.transition = 'transform 0.3s ease-in-out';
    });

    item.addEventListener('mouseleave', () => {
        const content = item.querySelector('.timeline-content');
        content.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const infographic = item.querySelector('.infographic');
        infographic.style.display = 'block';
        setTimeout(() => {
            infographic.style.opacity = '1';
        }, 10);
    });

    item.addEventListener('mouseleave', () => {
        const infographic = item.querySelector('.infographic');
        infographic.style.opacity = '0';
        setTimeout(() => {
            infographic.style.display = 'none';
        }, 300); // Correspond à la durée de la transition CSS
    });
});

// Get all rectangles
var rectangles = document.querySelectorAll('.rectangle');

// Add click event listener to each rectangle
rectangles.forEach(function(rectangle) {
    rectangle.addEventListener('click', function() {
        var modalId = this.getAttribute('data-modal');
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
    });
});

// Get all close buttons
var closeButtons = document.querySelectorAll('.close');

// Add click event listener to each close button
closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var modal = this.closest('.modal');
        modal.style.display = "none";
    });
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

function openPDF(url) {
    var modal = document.getElementById("pdfModal");
    var iframe = document.getElementById("pdfFrame");
    iframe.src = url;
    modal.style.display = "block";
}

function closePDF() {
    var modal = document.getElementById("pdfModal");
    var iframe = document.getElementById("pdfFrame");
    modal.style.display = "none";
    iframe.src = "";
}

// Close the modal if the user clicks outside of it
window.addEventListener('click', function(event) {
    var modal = document.getElementById("pdfModal");
    if (event.target == modal) {
        closePDF();
    }
});

