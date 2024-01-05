document.addEventListener('DOMContentLoaded', function() {
    // Highlight the current page in the navigation bar
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }

    // Function to resize images based on screen width
    function resizeImages() {
        const screenWidth = window.innerWidth;

        document.querySelectorAll('.artwork img').forEach(img => {
            if (screenWidth <= 600) { // Assuming 600px as breakpoint for smartphones
                img.style.maxWidth = '100%'; // Limit image width to 100% of its container
                img.style.height = 'auto'; // Maintain aspect ratio
            } else {
                // For larger screens, adjust size as needed
                img.style.maxWidth = ''; // Reset to default
                img.style.height = ''; // Reset to default
            }
        });
    };

    resizeImages(); // Call immediately on load
    window.addEventListener('resize', resizeImages); // Call on window resize

    // Filter paintings based on city, size, and price
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            document.querySelectorAll('.artwork').forEach(artwork => {
                artwork.style.display = 'none';
                if (artwork.getAttribute('data-city') === this.getAttribute('data-city')) {
                    artwork.style.display = 'block';
                }
            });
        });
    });
});
