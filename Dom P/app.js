let div = null;
(function main() {
    let body = document.querySelector('body');
    let changeBtn = document.querySelector('#btn');
    let code = document.querySelector("#colorCode");
    let copyBtn = document.querySelector('#copy-btn');


    changeBtn.addEventListener('click', () => {
        let bgColor = generatorHexColor();
        body.style.background = bgColor;
        code.value = bgColor;
    });
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(code.value);
        if (div !== null) {
            div.remove();
            div = null;
        }
        generalToastMessage(`${code.value} Copied`);
    })
})();


function generatorHexColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function generalToastMessage(msg) {
    div = document.createElement('div');
    div.innerText = msg;
    div.classList = 'toast-message toast-message-slide-in';

    div.addEventListener('click', () => {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');

        div.addEventListener('animationend', () => {
            div.remove();
            div = null;
        })
    });
    document.body.appendChild(div);
}
