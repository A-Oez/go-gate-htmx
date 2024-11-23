document.addEventListener('DOMContentLoaded', function () {
    const switcher = document.getElementById('color-mode-switcher');
    const iconGithub = document.querySelector('.icon-github');

    // Toggle the mode on click
    switcher.addEventListener('click', function (event) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === "dark") {
            iconGithub.setAttribute('fill', '#FFFFFF');
        } else {
            iconGithub.setAttribute('fill', '#000000');
        }
    });
});
