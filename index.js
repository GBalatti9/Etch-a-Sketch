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
    const colorMode = document.getElementById('color-mode');
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
        colorMode.classList.add('box-shadow');
        clear.classList.remove('box-shadow');
        eraser.classList.remove('box-shadow');
        rainbow.classList.remove('box-shadow');

        pixelDOM.forEach(pixel => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = chooseColor.value;
            })
        })
    })

    colorMode.addEventListener('click', () => {
        colorMode.classList.add('box-shadow');
        clear.classList.remove('box-shadow');
        eraser.classList.remove('box-shadow');
        rainbow.classList.remove('box-shadow');

        pixelDOM.forEach(pixel => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = chooseColor.value;
            })
        })
    })

    eraser.addEventListener('click', () => {
        container.classList.add('erase-cursor');

        eraser.classList.add('box-shadow');
        clear.classList.remove('box-shadow');
        colorMode.classList.remove('box-shadow');
        rainbow.classList.remove('box-shadow');

        pixelDOM.forEach(pixel => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = '#ebebeb';
            })
        })
    })

    clear.addEventListener('click', () => {
        clear.classList.add('box-shadow');
        colorMode.classList.remove('box-shadow');
        eraser.classList.remove('box-shadow');
        rainbow.classList.remove('box-shadow');

        pixelDOM.forEach(pixel => {
            pixel.style.backgroundColor = '#ebebeb'
        })
    })

    const changeSizePx = document.getElementById('number-px');
    // console.log(changeSizePx);

    changeSizePx.addEventListener('click', (e) => {
        console.log(e);
        changeSizePx.style.backgroundColor = 'white';
    })

    changeSizePx.addEventListener('input', (e) => {
        
        let pxs = e.target.value
        if(pxs.length > 0){
            changeSizePx.style.backgroundColor = 'white';
        } else{
            changeSizePx.style.backgroundColor = 'rgb(84, 84, 84)';
        }
        pixelDOM.forEach(pixel => {
            if (pxs >= 16 && pxs <= 100) {
                pixel.style.width = `${pxs}px`;
                pixel.style.height = `${pxs}px`;
            }
        })
    })

    const gridState = document.getElementById('grid-state');
    const label = document.querySelector('label[for="grid-state"]');
    label.textContent = 'Turn grid off'

    
    const toggleGridState = () => {
        if(gridState.checked){
            label.textContent = 'Turn grid on';
            pixelDOM.forEach(pixel => {
                pixel.style.border = 'none';
            })
        } else {
            label.textContent = 'Turn grid off';
            pixelDOM.forEach(pixel => {
            pixel.style.border = '0.5px solid black';
            });
        }
    }
    gridState.addEventListener('change', toggleGridState)

    console.log(color.value);

    const rainbow = document.getElementById('rainbow');
    
    const pickRandomColor = () => {
        let random = {
            firstNumber: Math.floor(Math.random() * (256 - 0) - 0),
            secondNumber: Math.floor(Math.random() * (256 - 0) - 0),
            thirdNumber: Math.floor(Math.random() * (256 - 0) - 0),
        };
        let randomColor = `rgb(${random.firstNumber}, ${random.secondNumber}, ${random.thirdNumber})`
        return randomColor;
    }

    rainbow.addEventListener('click', () => {
        rainbow.classList.add('box-shadow');
        colorMode.classList.remove('box-shadow');
        clear.classList.remove('box-shadow');
        colorMode.classList.remove('box-shadow');
        eraser.classList.remove('box-shadow');


        pixelDOM.forEach(pixel => {
            pixel.addEventListener('mouseover', () => {
                pixel.style.backgroundColor = pickRandomColor();
            })
        })
    });
}