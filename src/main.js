import './scss/styles.scss'


// theme switcher
const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('click', () => {
    if (document.getElementById('theme').getAttribute('data-bs-theme') === 'dark') {
        document.getElementById('theme').setAttribute('data-bs-theme', 'light')
    } else {
        document.getElementById('theme').setAttribute('data-bs-theme', 'dark');  
    }
});