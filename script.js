
const containerDiv = document.querySelector('#container');

function makeGrid(rows, columns) {
    // check for existing button to remove if played already
    while(document.querySelector('button') !== null) {
        document.querySelector('button').remove();
    }
    
    // create the grid
    containerDiv.style.setProperty('--grid-rows', rows);
    containerDiv.style.setProperty('--grid-columns', columns);
    containerDiv.style.width = '960px';
    containerDiv.style.overflow = 'hidden';
   for(i = 0; i< (rows * columns); i++) {
        let square = document.createElement('div');
        square.style.minHeight = '0';
        square.style.minWidth = '0';
        square.style.overflow = 'hidden';
        containerDiv.appendChild(square).className = 'grid-item';
        // Adding a mouseover eventListener;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'blue';
        })
    }
    createButton();
}

function createButton() {
    const buttonDiv = document.querySelector('#buttonDiv');
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Grid';
    resetButton.style.margin = '20px';
    buttonDiv.appendChild(resetButton);

    // add event listener to the button and prompt user/reset grid/throw error> 100

    resetButton.addEventListener('click', () => {
        document.querySelectorAll('.grid-item').forEach(e => e.remove());
        let userGridInput = prompt("Please enter the number of grid squares for side (Max:100");
        if(userGridInput > 100) {
            alert("ERROR! You specified a grid size larger than the max of 100.");
            return;
        }
        rows = userGridInput;
        columns = userGridInput;
        makeGrid(rows, columns);

    })

}

makeGrid(16, 16);
 