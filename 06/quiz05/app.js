$box = document.querySelector('.box');
$box1 = document.querySelector('.box1');

App($box);
App($box1);

function App(box) {
    const dragPos = { x: 0, y: 0 };
    const distance = { x: 0, y: 0 };

    const onBoxDown = (event) => {
        //드래그 시작 위치 설정
        [dragPos.x, dragPos.y] = [event.clientX, event.clientY];

        document.addEventListener('mousemove', boxMove);
        document.addEventListener('mouseup', removeListener);
    }

    // 이 함수가 호출될 때 마다
    // 원래 마우스의 위치와
    // 움직인 마우스의 위치를 통해
    // BOX이동
    const boxMove = (e) => {
        //마우스가 움직인 거리
        [distance.x, distance.y] = [dragPos.x - e.clientX, dragPos.y - e.clientY];

        //마우스 위치 재설정
        [dragPos.x, dragPos.y] = [e.clientX, e.clientY];

        //랜더링
        box.style.left = `${box.offsetLeft - distance.x}px`;
        box.style.top = `${box.offsetTop - distance.y}px`;
    }

    const removeListener = () => {
        document.removeEventListener('mouseup', removeListener);
        document.removeEventListener('mousemove', boxMove);
    }

    box.addEventListener('mousedown', onBoxDown);
}
