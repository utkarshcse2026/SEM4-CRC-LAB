document.addEventListener('DOMContentLoaded', () => {
    const openMenuBtn = document.getElementById('open-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const navMenu = document.querySelector('.nav_menu');

    openMenuBtn.addEventListener('click', () => {
        navMenu.classList.add('open');
        openMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'inline-block';
    });

    closeMenuBtn.addEventListener('click', () => {
        navMenu.classList.remove('open');
        openMenuBtn.style.display = 'inline-block';
        closeMenuBtn.style.display = 'none';
    });
});
