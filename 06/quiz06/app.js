
function App() {
    const $main = document.querySelector('main');
    const $h1 = createDOM('h1', { 'text-content': 'Hello World' }, { 'class': 'title' });

    console.log($h1);
}

new App();

