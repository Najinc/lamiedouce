// Navbar
const burgerButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');

burgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    burgerButton.querySelector('svg:nth-child(1)').classList.toggle('hidden');
    burgerButton.querySelector('svg:nth-child(2)').classList.toggle('hidden');
});

// Dark mode
const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');

    document.querySelector('.bxs-moon').classList.toggle('force-hidden');
    document.querySelector('.bxs-sun').classList.toggle('force-hidden');
}
