const enterText = document.querySelector('#enterText');
const qsBtn = document.querySelector('#qsBtn');
const inputBtn = document.querySelector('#inputBtn');
const innerBtn = document.querySelector('#innerBtn');
const apBtn = document.querySelector('#apBtn');


qsBtn.addEventListener('click', () => {
    console.log(document.querySelector('input'))
});

inputBtn.addEventListener('click', () => {
    if (!enterText.value) { return alert('내용을 입력해주세요.') }

    const getText = enterText.value;
    alert(getText)
    enterText.value = '';
    enterText.focus();
});

innerBtn.addEventListener('click', () => {
    const box = document.querySelector('#box');
    box.innerHTML = `<h2>innerHTML이 변경 됩니다.</h2>`
});

apBtn.addEventListener('click', () => {
    const checkBtn = document.createElement('span');
    checkBtn.setAttribute('class', 'check');
    checkBtn.innerText = ' done ';

    box.appendChild(checkBtn);
});