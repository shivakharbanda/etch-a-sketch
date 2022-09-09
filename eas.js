
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

gridBtn.addEventListener("click", (e) => {
    gridSize = prompt("Enter grid size");
    gridSize = Number(gridSize);
    if (gridSize > 100) {
        alert("invalid grid size. please enter a number between 1 and 100");
        gridSize = 16;
    }
    removeGrid();
    divMaker(Number(gridSize))


})

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
        boxy = e.target;
        let qury = `${boxy.id}`;
        boxy = document.getElementById(qury);
        boxy.style.backgroundColor = "aqua";
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



function randomColor() {
    let x = 0;
    let y = 0;
    let z = 0;
}