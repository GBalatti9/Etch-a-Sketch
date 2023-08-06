window.onload = () => {

    const container = document.querySelector('.container');
    container.style.border = '.5px solid black'
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '504px';
    container.style.height = '504px'
    container.style.overflow = 'hidden'
    container.style.margin = 'auto'
    console.log(container);
    const createGridPx = () => {
        for (let i = 0; i <= 1000; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.width = '16px'
            pixel.style.height = '16px'
            pixel.style.border = '.5px solid black'

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

}