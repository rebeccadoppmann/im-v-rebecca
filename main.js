const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
};

/*Aktionen werden getriggert, je nach dem ob Scroll einen gewissen Punkt erreicht hat*/ 
const scrollHeader = () =>{
    const navbarElement = selectElement('#header');
    if(this.scrollY >= 15) {
        navbarElement.classList.add('activated');
    } else {
        navbarElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);

/*5. Menu öffnen und Such-Fenster installieren*/
const menuToggleIcon = selectElement('#menu-toggle-icon');


const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated')
}

menuToggleIcon.addEventListener('click', toggleMenu);


/*6. Hellels und dunkels Theme ändern*/

const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

// Überprüfen, ob der aktuelle Theme-Zustand im Local Storage vorhanden ist und ihn anwenden
if (currentTheme === 'light-theme') {
    bodyElement.classList.add('light-theme');
}

// Event-Listener für den Klick auf den Toggle-Button
themeToggleBtn.addEventListener('click', () => {
    // Toggle für das Hinzufügen/Entfernen der 'light-theme'-Klasse am Body-Element
    bodyElement.classList.toggle('light-theme');

    // Aktualisierung des Local Storage basierend auf dem aktuellen Zustand
    if (bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'light-theme');
    } else {
        localStorage.removeItem('currentTheme');
    }
});


/*7. Suchen-Feld soll sich öffnen*/

const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');


/*macht, dass sich das Such-Feld öffnet*/
formOpenBtn.addEventListener('click', () => searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click', () => searchFormContainer.classList.remove('activated'));

/*macht, dass sich das Such-Feld schliesst, wenn man auf ESC drückt*/
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') searchFormContainer.classList.remove('activated');
});


