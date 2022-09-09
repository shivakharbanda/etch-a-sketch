
container = document.querySelector('.etch-box');

containHeight = 500;
containerWidth = 500;
area = containerWidth * containHeight;
gridSize = 16;

let rainbowMode = false;

divMaker(gridSize)
console.log(area)

clearBtn = document.getElementById("clear");
console.log(clearBtn);

clearBtn.addEventListener("click", clearGrid);


gridBtn = document.getElementById("grid");

rainbowBtn = document.getElementById("rainbow");

rainbowBtn.addEventListener("click", () => {
    rainbowMode = true
})

gridBtn.addEventListener("click", (e) => {
    gridSize = prompt("Enter grid size");
    gridSize = Number(gridSize);
    if (gridSize > 100 || gridSize < 1) {
        alert("invalid grid size. please enter a number between 1 and 100");
        gridSize = 16;
    }
    removeGrid();
    divMaker(Number(gridSize))


});

function divMaker(num) {
    containHeight = 500;
    parent = document.querySelector('.etch-box');

    for (let i = 0; i < num * num; i ++) {
        const div = document.createElement('div');
        parent.appendChild(div);
        div.setAttribute('class', 'box');
        div.setAttribute('id', i)
        boxHeight = Number(containHeight) /num;
        div.style.height = `${boxHeight}px`
        div.style.width = `${boxHeight}px`

    }


    let boxes = document.querySelectorAll('.box');

    boxes.forEach(box => box.addEventListener("mouseover", (e) => {
        let colorGrid = "none";
        if (rainbowMode == false) {
            colorGrid = "aqua";
        } else if (rainbowMode == true) {
            let x = getRandom();
            let y = getRandom();
            let z = getRandom();
            colorGrid = `rgb(${x},${y}, ${z})`;
        }
        boxy = e.target;
        let qury = `${boxy.id}`;
        boxy = document.getElementById(qury);
        boxy.style.backgroundColor = colorGrid;
        console.log(rainbowMode);
        //console.log(boxy);
    }));
}

function clearGrid() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.style.backgroundColor = "white");
}

function removeGrid() {
    papa = document.querySelector(".etch-box");

    while (papa.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function checkSize(size) {
    if (Number(size) > 100 && Number(size) < 0) {
        return "false";
    } 
}



function getRandom() {
    let min = 0;
    let max = 255;

    return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandom())