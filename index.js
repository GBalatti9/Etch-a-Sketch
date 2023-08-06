window.onload = () => {

    const container = document.querySelector('.container');
    console.log(container);
    const createGridPx = () => {
        const numberOfPx = 1024;
        const containerWidth = 500; // Width of the container in pixels
        const pixelsPerRow = 32; // Number of pixels to display in each row
        const pixelSize = containerWidth / pixelsPerRow; // Calculate the size of each pixel

        for (let i = 0; i <= numberOfPx; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.width = `${pixelSize}px`;
            pixel.style.height = `${pixelSize}px`;
            // pixel.style.border = '.5px solid black';

            container.appendChild(pixel);
        }
    }
    createGridPx();

    const pixelDOM = Array.from(document.querySelectorAll('.pixel'));
    pixelDOM.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = 'red';
        })
    })

    const px = document.querySelector('#px');
    px.addEventListener('click', () => {
        pixelDOM.forEach(pixel => {
            pixel.style.backgroundColor = 'white'
            pixel.style.width = '50px'
            pixel.style.height = '50px'
        })
    })

}