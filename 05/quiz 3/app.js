const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

class App {
    constructor() {
        this.$main = $('main');
        this.$container = $('.container');
        this.registerButtonEvent();
    }

    registerButtonEvent() {
        this.$container.addEventListener('click', ({ target }) => { 
            const $box = $$('.box');
            const className = target.className;

            switch (className) {
                case 'add-red':
                    $box.forEach(box => box.classList.toggle('red'));
                    break;
                
                case 'add-btn':
                    const $newBox = $box[0];
                    this.$main.insertAdjacentHTML('beforeend', $newBox.outerHTML);
                    break;
                
                case 'delete-btn':
                    const $targetBox = this.$main.lastElementChild;
                    this.$main.removeChild($targetBox);
                    break;
                
                case 'text-btn':
                    const $input = $('input[type="text"]');
                    const value = $input.value;

                    if (value) { 
                        $box.forEach(box =>
                            box.insertAdjacentHTML('beforeend', `<div>${value}</div>`)
                        );
                        $input.value = '';
                    }
                    break;
                
                case 'reset-btn':
                    $box.forEach(box => box.remove());
                    break;
                
                case 'toggle-btn':
                    $box.forEach(box => box.classList.toggle('hidden'));
                    break;
                
                case 'image-btn':
                    if (!$box.length) {
                        this.$main.insertAdjacentHTML('beforeend',
                            `<div class="box">
                                <img src="./public/star.png" alt="star" />
                             </div>`
                        );

                        return;
                    }

                    $box.forEach(box => box.insertAdjacentHTML('beforeend', `<img src="./public/star.png" alt="star" />`));

                default:
                    break;
                
            }
        });
    }

    
}

const app = new App();