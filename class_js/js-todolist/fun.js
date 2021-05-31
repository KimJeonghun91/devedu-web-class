const itemList = document.querySelector('#itemList');
const enterBtn = document.querySelector('#enterBtn');
const enterText = document.querySelector('#enterText');

enterBtn.addEventListener('click', () => {
    createItem();
});


enterText.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        createItem();
    }
});


const createItem = () => {
    const getText = enterText.value;
    if (!getText) { return alert('내용을 입력해주세요.') }

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


    // 생성한 아이템을 부모 리스트뷰에 넣는다.
    itemList.appendChild(itemWrap);

    // 스크롤링
    itemList.scrollIntoView({ block: 'end' });

    enterText.value = '';
    enterText.focus();
}
