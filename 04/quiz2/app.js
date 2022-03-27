
class App {
    constructor() {
        this.$body = document.querySelector('body');
        this.$board = document.createElement('div')
        this.$board.id = 'board';
        this.$preSelDom = null;
        this.color = 'black';
        this.SQUARE_NUM = 16;
    }

    changeColor(color) {
        return (color === 'black') ? 'white' : 'black';
    }

    createBoardSquare() {
        for (let i = 1; i <= this.SQUARE_NUM; i++) {
            this.$board.insertAdjacentHTML('beforeend', `<span class="${this.color}"></span>`);
                
            if (i % 4 !== 0) this.color = this.changeColor(this.color);
        }
    }

    registerClickEventToBoard() {
        this.$board.addEventListener('click', (e) => {
            
            if (this.$preSelDom) {
                this.$preSelDom.classList.remove("sel");
            }

            e.target.classList.add("sel");
            this.$preSelDom = e.target;
        });
    }

    render() {
        this.createBoardSquare();
        this.registerClickEventToBoard();

        this.$body.appendChild(this.$board);
    }
}

const app = new App();

app.render();


