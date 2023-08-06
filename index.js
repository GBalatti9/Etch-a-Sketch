window.onload = () => {

    const container = document.querySelector('.container');
    const createGridPx = () => {

        for (let i = 0; i <= 1024; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            container.appendChild(pixel);
        }
    }
    createGridPx();

    const pixelDOM = Array.from(document.querySelectorAll('.pixel'));
    const chooseColor = document.getElementById('color');
    const eraser = document.getElementById('eraser');
    const clear = document.getElementById('clear');
    pixelDOM.forEach(pixel => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = chooseColor.value;
        })
    })

    chooseColor.addEventListener('click', () => {
        pixelDOM.forEach(pixel => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = chooseColor.value;
            })
        })
    })
    eraser.addEventListener('click', () => {
        container.classList.add('erase-cursor')
        chooseColor.value = '#ffffff'
        pixelDOM.forEach(pixel => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = 'white';
            })
        })
    })

    clear.addEventListener('click', () => {
        pixelDOM.forEach(pixel => {
            pixel.style.backgroundColor = 'white'
        })
    })

    const changeSizePx = document.getElementById('number-px');
    // console.log(changeSizePx);
    changeSizePx.addEventListener('input', (e) => {
        let pxs = e.target.value

        pixelDOM.forEach(pixel => {
            if (pxs >= 16 && pxs <= 100) {
                pixel.style.width = `${pxs}px`;
                pixel.style.height = `${pxs}px`;
            }
        })
    })

    console.log(color.value);
}