const container = document.querySelector('.container')

const getGridNum = function() {
    let gridNum = Number(window.prompt("type a number", ""))
    return gridNum 
}

const reset = function(pixels) {
    pixels.forEach(function(pixel){
        pixel.style.color = 'aqua';
    })
}


let gridNum;
if (getGridNum <= 0) {
    gridNum = getGridNum()
} else {
    gridNum = 16;
}


for (let i = 0; i < gridNum; i++) {
    let div = document.createElement('div');
    div.classList.add("lead-div")
    container.appendChild(div);
}

const leadDivs = document.querySelectorAll('.lead-div');
leadDivs.forEach(function(div) {
    for (let i = 0; i < gridNum; i++) {
        let childDiv = document.createElement('div');
        childDiv.textContent = "bb div";
        childDiv.classList.add("child-div")
        div.appendChild(childDiv);
    }
})

const pixels = document.querySelectorAll('.child-div');
pixels.forEach(function(pixel){
    pixel.addEventListener('mouseenter', function(e){
        e.target.style.color = 'orange';
    })
})

const resetBtn = document.querySelector('.reset');









