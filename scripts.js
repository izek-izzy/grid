createGrid(16);
const newGridButton = document.getElementById('newGridButton');
newGridButton.addEventListener('click', () => {
    let size = prompt("Enter the number of squares per side for the new grid (maximum 100)");
    size = parseInt(size);
    if (!isNaN(size) && size >= 1 && size <= 100) {
        createGrid(size);
    } else {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }
    createGrid(size);
});

function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    const squareSize = 960/size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'orange';
        });
        container.appendChild(square);
    }
}

    




