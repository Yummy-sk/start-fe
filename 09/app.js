const _fetch = async ({ url }) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('API Call Fail');
        }

        return data;
    } catch (e) {
        console.error(e.message);
        return e.message
    }
}


function App() {
    const $input = document.querySelector('#url');
    const $button = document.querySelector('button');
    const $textArea = document.querySelector('#log');

    this.state = {
        input: '',
        content: '',
    }

    this.handleInput = () => {
        $input.addEventListener('input', (e) => {
            this.state = { ...this.state, input: e.target.value };
        })
    }

    this.handleButtonClick = () => {
        $button.addEventListener('click', async () => {
            
            const response = await _fetch({ url: this.state.input });

            this.state = { ...this.state, content: response };

            $textArea.value = this.state.content;
        });
    }

    this.init = () => {
        this.handleInput();
        this.handleButtonClick();
    }
}

const app = new App();
app.init();

