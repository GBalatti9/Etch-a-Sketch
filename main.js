let color = 'black';

const gridBoard = (size) => {
    let board = document.querySelector('.grid-board');
    let pixels = board.querySelectorAll('div');
    pixels.forEach(div => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let px = document.createElement('div');
        px.addEventListener('mouseover', colorPx)
        px.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', px)
    }

    // Aplicar bordes si el checkbox "Turn grid on" está marcado
    let checkGrid = document.querySelector('#check-grid');
    if (checkGrid.checked) {
        applyGridBorders();
    }
}

gridBoard(16);

let errorElement = null;

const changeSize = (input) => {
    if (errorElement) {
        errorElement.remove();
        errorElement = null;
    }

    if (input < 1 || input > 100) {
        let btn = document.querySelector('.change-size-btn');
        let p = document.createElement('p');
        p.textContent = 'Invalid number of pxs. It must be between 1 and 100';

        btn.insertAdjacentElement('afterend', p);

        errorElement = p;

    } else {
        gridBoard(input);
    }
}

function colorPx() {
    if ((color === 'random')) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = color;
    }
}

const changeColor = (choice) => {
    if (choice === 'random') {
        color = 'random';
    } else {
        color = choice;
    }
}

const resetGrid = () => {
    let board = document.querySelector('.grid-board');
    let pixels = board.querySelectorAll('div');
    pixels.forEach(div => div.style.backgroundColor = 'white');
}

const applyGridBorders = () => {
    let board = document.querySelector('.grid-board');
    let pixels = board.querySelectorAll('div');
    pixels.forEach(div => div.style.border = '0.5px solid black');
}

const gridState = () => {
    let checkGrid = document.querySelector('#check-grid');
    let gridOff = document.querySelector('.grid-on-off');
    
    if (checkGrid.checked) {
        applyGridBorders();
        gridOff.textContent = 'Turn grid off'
    } else {
        gridOff.textContent = 'Turn grid on'
        let board = document.querySelector('.grid-board');
        let pixels = board.querySelectorAll('div');
        pixels.forEach(div => div.style.border = 'none');
    }
}

document.querySelector('#check-grid').addEventListener('click', gridState);

const buttons = Array.from(document.querySelectorAll('.buttons button'));

buttons.forEach(button => {
    button.style.boxShadow = ''
    button.addEventListener('click', e => {
        buttons.forEach(otherButton => {
            otherButton.style.boxShadow = ''; 
        });
        button.style.boxShadow = '1px 1px 1px black';
    })
})
