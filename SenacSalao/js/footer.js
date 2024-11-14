document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    footer.style.opacity = 0;
    setTimeout(() => {
        footer.style.opacity = 1;
        footer.style.transition = 'opacity 2s';
    }, 500);
});
