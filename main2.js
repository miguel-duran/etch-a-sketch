let gridSize = 256;

//creates 16 x 16 grid
const createGrid = function(gridSize) {
    const grid = document.querySelector('.container');

    for (let i = 0; i < gridSize; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${960/Math.sqrt(gridSize)}px`;
        square.style.height = `${750/Math.sqrt(gridSize)}px`;
        grid.appendChild(square);
        console.log(Math.sqrt(gridSize))
        console.log(960/16)
    }
}

createGrid(gridSize)

//add hover effect

const addHoverEffect = function(){
    const squares = document.querySelectorAll('.square')

    squares.forEach(function(square){
        square.addEventListener('mouseenter',function(e){
            e.target.style.backgroundColor = 'aqua';
        })
    })
}
addHoverEffect()


// remove all square from current grid
const removeSquares = function() {
    const squares = document.querySelectorAll('.square')
    const grid = document.querySelector('.container');
    squares.forEach(function(square){
        grid.removeChild(square)
    })
}

// reset button

const resetGrid = function(){
    const resetBtn = document.querySelector('.reset')
        resetBtn.addEventListener('click', function(e){
        const squares = document.querySelectorAll('.square')

        squares.forEach(function(square){
            square.style.backgroundColor = 'brown';
        })
    })
}

const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click', function(e){
    //const squares = document.querySelectorAll('.square')

    squares.forEach(function(square){
        square.style.backgroundColor = 'brown';
    })
})
resetGrid()

// button for new gridSize
const newGridBtn = document.querySelector('.newGrid')
newGridBtn.addEventListener('click', function(e){
    removeSquares()
    let gridSize = Number(window.prompt("enter a number between 10 and 50", ""));
    gridSize = gridSize*gridSize;
    createGrid(gridSize)
    addHoverEffect()
    resetGrid()
})


