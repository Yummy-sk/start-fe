import avg from "./avg.js";
import rand from "./rand.js";

const $avg = document.querySelector("#avg");
const $rand = document.querySelector("#rand");
const $input = document.querySelector("input[type=text]");
const $minInput = document.querySelector("#min");
const $maxInput = document.querySelector("#max");

const checkValidity = ({ value }) => {
    const result = [];
    try {
        for (const v in value) {
            const num = parseInt(value[v]);
            if (isNaN(num)) continue;
            result.push(num);
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}

$avg.addEventListener("submit", e => {
    e.preventDefault();
    const value = $input.value
        .replace(/\s/gi, '')
        .split(",");
    
    const result = checkValidity({ value });

    if (result) {
        const avgResult = avg(...result);
        alert(`평균값은 ${avgResult} 입니다.`);
    }
});

$rand.addEventListener("submit", e => {
    e.preventDefault();
    const min = parseInt($minInput.value);
    const max = parseInt($maxInput.value);
   
    const result = rand({
        min: min || 0,
        max
    });

    alert(`추출된 값은 ${result} 입니다.`);
});
