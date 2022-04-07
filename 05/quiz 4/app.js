const $container = document.querySelector('main');
const $box = document.querySelector('#box');

console.log($container);
const { width: containerWidth, height: containerHeight } = $container.getBoundingClientRect();

const { width: boxWidth, height: boxHeight } = $box.getBoundingClientRect();

let isDragging = null;
let originLeft = null;
let originTop = null;
let originX = null;
let originY = null;

$box.addEventListener('mousedown', (e) => {
    isDragging = true;
    originLeft = e.clientX;
    originTop = e.clientY;
    originX = $box.offsetLeft;
    originY = $box.offsetTop;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const diffX = e.clientX - originX;
        const diffY = e.clientY - originY
        const endOfXPoint = containerWidth - boxWidth;
        const endOfYPoint = containerHeight - boxHeight;

        $box.style.left = `${Math.min(Math.max(0, originLeft + diffX), endOfXPoint)}px`;
        $box.style.top = `${Math.min(Math.max(0, originTop + diffY), endOfYPoint)}px`;

    }
});

document.addEventListener('mouseup', () => { 
    isDragging = false;
});