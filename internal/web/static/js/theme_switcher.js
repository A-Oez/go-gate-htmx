document.addEventListener('DOMContentLoaded', function () {
    const switcher = document.getElementById('color-mode-switcher');

    switcher.addEventListener('click', function (event) {
        event.preventDefault();
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
