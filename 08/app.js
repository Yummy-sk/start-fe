
const $ = (selector) => document.querySelector(selector);

function App() {
    const $score = $("#box");
    const $min = $("#min");
    const $max = $("#max");
    const $btn = $("#btn");
    let timer = null;

    $btn.addEventListener("mousedown", () => { 
        timer = setInterval(() => {
            const min = parseInt($min.value);
            const max = parseInt($max.value);
            const next = Math.floor(Math.random() * (max - min + 1)) + min;
            $score.textContent = next;
        });
    });

    $btn.addEventListener("mouseup", () => { 
        clearInterval(timer);
    });
}

App();

