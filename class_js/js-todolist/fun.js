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
    // <span></span>

    delBtn.setAttribute('class', 'material-icons md-48 delBtn');
    // <span class="material-icons md-48 delBtn"></span>

    delBtn.innerText = 'delete';
    // <span class="material-icons md-48 delBtn">delete</span>

    delBtn.addEventListener('click', () => {
        itemList.removeChild(itemWrap);
    })

    itemWrap.appendChild(checkBtn); // 체크 버튼
    itemWrap.appendChild(itemText); // 할일 텍스트
    itemWrap.appendChild(delBtn);   // 삭제 버튼


    // 생성한 아이템을 부모 리스트뷰에 넣는다.
    itemList.appendChild(itemWrap);
    //   <div id="itemList" class="itemList"></div>

    // 스크롤링
    itemList.scrollIntoView({ block: 'end' });

    enterText.value = '';
    enterText.focus();
}
