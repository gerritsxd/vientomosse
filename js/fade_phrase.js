document.addEventListener('DOMContentLoaded', function() {
    const loadingPhrase = document.getElementById('loading-phrase');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        loadingPhrase.style.opacity = '0';
    }, 5000); // Fade out after 5 seconds

    setTimeout(() => {
        loadingPhrase.style.display = 'none';
        mainContent.style.display = 'block'; // Show main content
        document.body.style.display = 'block'; // Show the rest of the body content
    }, 6000); // Remove loading phrase and show content after 6 seconds
});
