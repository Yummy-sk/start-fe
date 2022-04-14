const createDOMElement = (tagName, attrs) => {
  const element = document.createElement(tagName);
  attrs &&
    attrs.forEach(({ attr, value }) => {
      attr !== 'textContent'
        ? element.setAttribute(attr, value)
        : (element.textContent = value);
    });
  return element;
};

function App() {
    const $main = document.querySelector('main');
    const $h1 = createDOMElement('h1', [{ attr: 'textContent', value: '구구단' }]);
    const $input = createDOMElement('input', [{ attr: 'type' }]);
    const $button = createDOMElement('button', [{ attr: 'textContent', value: '구구단' }]);
    const $ul = createDOMElement('ul');

    this.init = () => {
        [$h1, $input, $button, $ul].forEach($el => $main.appendChild($el));
    }

    this.multi = (number) => {
        $ul.innerHTML = '';
        
        const $fragment = document.createDocumentFragment();

        for (let i = 1; i <= 9; i++) {
            $fragment.appendChild(createDOMElement('li', [{ attr: 'textContent', value: `${number} * ${i} = ${number * i}` }]));
        }

        $ul.appendChild($fragment);

    }

    this.checkIsNumber = (value) => {
        if (value.trim() && isNaN(value)) {
            alert('숫자를 입력해주세요');
            return false;
        }

        return true;
    }

    this.registerEvent = () => { 
        $input.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.checkIsNumber(e.target.value) && this.multi($input.value); 
                
                $input.value = '';
            }
        });

        $button.addEventListener('click', (e) => { 
            this.checkIsNumber(e.target.value) && this.multi($input.value);  

            $input.value = '';
        });
    }

    this.registerEvent();
    this.init();
}

new App();
