document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('filter-btn').addEventListener('click', function() {
        var filterMenu = document.getElementById('filter-menu');
        filterMenu.style.display = filterMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.getElementById('apply-filter').addEventListener('click', function() {
        var city = document.getElementById('city-select').value;
        var size = document.getElementById('size-select').value;
        var price = document.getElementById('price-range').value;

        // Implement the filter logic here
        // You will need to iterate over your gallery items and show/hide them based on the selected filters
    });

    document.getElementById('price-range').addEventListener('input', function() {
        var price = document.getElementById('price-range').value;
        document.getElementById('price-value').textContent = `$0 - $${price}`;
    });
	document.querySelectorAll('.purchase-button').forEach(button => {
    button.addEventListener('click', function() {
        var imageUrl = encodeURIComponent(this.getAttribute('data-image'));
        var title = encodeURIComponent(this.getAttribute('data-title'));
        var description = encodeURIComponent(this.getAttribute('data-description'));
        var price = encodeURIComponent(this.getAttribute('data-price'));
        var size = encodeURIComponent(this.getAttribute('data-size'));

        var queryString = `?image=${imageUrl}&title=${title}&description=${description}&price=${price}&size=${size}`;
        window.location.href = 'purchase.html' + queryString;
    });
});

});

