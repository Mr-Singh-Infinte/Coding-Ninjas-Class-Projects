const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        // Switch to dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        // Switch to light mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});
