let amtOfGrids = 4;

const container = document.getElementById('#container');
const createGrid = (amtOfGrids) => {
    for(let i = 1; i <= amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        console.log(i);

        for(let j = 1; j <= amtOfGrids; j++){
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box')
            row.appendChild(gridBox);
            console.log(j);
        }
    container.appendChild(row);
    }
}

createGrid(amtOfGrids);