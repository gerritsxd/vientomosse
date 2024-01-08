document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('image');
    const title = urlParams.get('title');
    const description = urlParams.get('description');
    const price = urlParams.get('price');
    const size = urlParams.get('size');

    if (imageUrl) {
        const paintingImage = document.querySelector('.painting-container img.zoomable');
        paintingImage.src = decodeURIComponent(imageUrl);
        paintingImage.alt = decodeURIComponent(title || 'Painting');

        const infoElement = document.querySelector('.purchase-info .info');
        infoElement.innerHTML = `
            <p>Title: ${decodeURIComponent(title)}</p>
            <p>Description: ${decodeURIComponent(description)}</p>
            <p>Price: ${decodeURIComponent(price)}</p>
            <p>Size: ${decodeURIComponent(size)}</p>
        `;
    }

    // Include the setupMagnifyingGlass function if you have it, or remove this line
    setupMagnifyingGlass(imageUrl);
});

function setupMagnifyingGlass(imageUrl) {
    const painting = document.querySelector('.painting-container img.zoomable');
    if (!painting) return;

    const lens = document.createElement('div');
    lens.className = 'lens';
    document.querySelector('.painting-container').appendChild(lens);

    painting.addEventListener('mousemove', function(e) { moveLens(e, painting, lens, imageUrl); });
    lens.addEventListener('mousemove', function(e) { moveLens(e, painting, lens, imageUrl); });
    painting.addEventListener('mouseenter', function() {
        lens.style.visibility = 'visible';
    });
    painting.addEventListener('mouseleave', function() {
        lens.style.visibility = 'hidden';
    });
}

function moveLens(e, painting, lens, imageUrl) {
    const pos = getCursorPos(e, painting);
    const size = lens.offsetWidth / 2;
    const x = pos.x - size;
    const y = pos.y - size;

    lens.style.left = `${x}px`;
    lens.style.top = `${y}px`;

    lens.style.backgroundImage = `url('${decodeURIComponent(imageUrl)}')`;
    lens.style.backgroundSize = `${painting.width * 2}px ${painting.height * 2}px`;
    lens.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
}

function getCursorPos(e, painting) {
    const a = painting.getBoundingClientRect();
    let x = e.pageX - a.left;
    let y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
}
