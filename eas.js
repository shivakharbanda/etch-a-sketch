
container = document.querySelector('.etch-box');

containHeight = 850;
containerWidth = 850;
area = containerWidth * containHeight;


divMaker(4, container, containHeight)
console.log(area)


function divMaker(num, parent, containHeight) {
    for (let i = 0; i < num * num; i ++) {
        const div = document.createElement('div');
        parent.appendChild(div);
        div.setAttribute('class', 'box');
        boxHeight = Number(containHeight) /num;
        div.style.height = `${boxHeight}px`
        div.style.width = `${boxHeight}px`

    }
}