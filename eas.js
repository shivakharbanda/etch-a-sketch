
container = document.querySelector('.etch-box');

containHeight = 500;
containerWidth = 500;
area = containerWidth * containHeight;


divMaker(4, container, containHeight)
console.log(area)


function divMaker(num, parent, containHeight) {
    for (let i = 0; i < num * num; i ++) {
        const div = document.createElement('div');
        parent.appendChild(div);
        div.setAttribute('class', 'box');
        div.setAttribute('id', i)
        boxHeight = Number(containHeight) /num;
        div.style.height = `${boxHeight}px`
        div.style.width = `${boxHeight}px`

    }
}

let boxes = document.querySelectorAll('.box');

boxes.forEach(box => box.addEventListener("click", (e) => {
    boxy = e.target;
    let qury = `${boxy.id}`;
    boxy = document.getElementById(qury);
    boxy.classList.add('colored');
    console.log(boxy);
}));

