const $ = (selector) => document.querySelector(selector);
const getRandomInt = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

function App() {
    const $score = $('#point');
    const $life = $('#life');
    const $box = $('#box');
    const $bug = $('#bug');
    const [MIN_X, MIN_Y, MAX_X, MAX_Y] = [0, 0, $box.offsetWidth - 20, $box.offsetHeight - 20];
    const [INIT_SCORE, INIT_LIFE] = [0, 10];

    this.moveBugPos = () => {
        $bug.style.left = getRandomInt(MAX_X, MIN_X) + 'px';
        $bug.style.top = getRandomInt(MAX_Y, MIN_Y) + 'px';
    }

    this.onBoxClick = () => {
        $box.addEventListener('click', (e) => {
            const { id } = e.target;

            if (id === 'bug') {
                $score.innerText = Number($score.innerText) + 1;
            }

            if (id === 'box') {
                const curLife = Number($life.innerText) - 1;
                $life.innerText = curLife;

                if (!curLife) {
                    alert('Game Over');

                    $score.innerText = INIT_SCORE;
                    $life.innerText = INIT_LIFE;
                    return;
                }
            }
        });
    }

    this.moveBugByInterval = () => {
        setInterval(this.moveBugPos, 1500);
    }
    
    this.moveBugByInterval();
    this.onBoxClick();
}

new App();
