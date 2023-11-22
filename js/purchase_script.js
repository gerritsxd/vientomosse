document.addEventListener('DOMContentLoaded', function() {
    // Parse URL parameters and update the painting details
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('image');
    const title = urlParams.get('title');
    const description = urlParams.get('description');
    const price = urlParams.get('price');
    const size = urlParams.get('size');

    if (imageUrl && title && description && price && size) {
        const paintingImage = document.querySelector('.painting-container img.zoomable');
        paintingImage.src = decodeURIComponent(imageUrl);
        paintingImage.alt = decodeURIComponent(title);
        // Update other elements like title, description, etc., as needed
    }

    // Magnifying glass effect
    const painting = document.querySelector('.painting-container img.zoomable');
    const lens = document.createElement('div');
    lens.className = 'lens';
    document.querySelector('.painting-container').appendChild(lens);

    painting.addEventListener('mousemove', moveLens);
    lens.addEventListener('mousemove', moveLens);
    painting.addEventListener('mouseenter', function() {
        lens.style.visibility = 'visible';
    });
    painting.addEventListener('mouseleave', function() {
        lens.style.visibility = 'hidden';
    });

    function moveLens(e) {
        const pos = getCursorPos(e);
        const size = lens.offsetWidth / 2;
        const x = pos.x - size;
        const y = pos.y - size;

        lens.style.left = `${x}px`;
        lens.style.top = `${y}px`;

        lens.style.backgroundImage = `url('${decodeURIComponent(imageUrl)}')`;
        lens.style.backgroundSize = `${painting.width * 2}px ${painting.height * 2}px`;
        lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
    }

    function getCursorPos(e) {
        const a = painting.getBoundingClientRect();
        let x = e.pageX - a.left;
        let y = e.pageY - a.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
});
