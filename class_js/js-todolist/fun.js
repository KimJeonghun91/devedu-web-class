const itemList = document.querySelector('#itemList');
const enterBtn = document.querySelector('#enterBtn');
const enterText = document.querySelector('#enterText');

enterBtn.addEventListener('click', () => {
    if (!enterText.value) { return alert('내용을 입력해주세요.') }

    const getText = enterText.value;

    const listItem = createItem(getText);
    itemList.appendChild(listItem)


    enterText.value = '';
    enterText.focus();
});


const createItem = (getText) => {
    const itemWrap = document.createElement('div');
    itemWrap.setAttribute('class', 'itemWrap');

    const checkBtn = document.createElement('span');
    checkBtn.setAttribute('class', 'material-icons md-48 checkBtn');
    checkBtn.innerText = 'done';

    const itemText = document.createElement('span');
    itemText.setAttribute('class', 'itemText');
    itemText.innerText = getText;

    const delBtn = document.createElement('span');
    delBtn.setAttribute('class', 'material-icons md-48 delBtn');
    delBtn.innerText = 'delete';

    delBtn.addEventListener('click', () => {
        itemList.removeChild(itemWrap);
    })

    itemWrap.appendChild(checkBtn);
    itemWrap.appendChild(itemText);
    itemWrap.appendChild(delBtn);
    return itemWrap;
}