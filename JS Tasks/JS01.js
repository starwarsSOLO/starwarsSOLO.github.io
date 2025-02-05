
const button = document.querySelector('button');
const counterDisplay = document.querySelector('div');


let count = 0;

button.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
});
