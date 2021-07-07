const itemList = document.querySelector('#itemList');
const enterBtn = document.querySelector('#enterBtn');
const enterText = document.querySelector('#enterText');
let arrData = [];

enterBtn.addEventListener('click', () => {
    addItem();
});


enterText.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        addItem();
    }
});



const createList = () => {
    // 부모뷰 초기화 => 모든 자식 노드 삭제
    while (itemList.hasChildNodes()) { itemList.removeChild(itemList.firstChild); }

    for (const element of arrData) {
        const itemWrap = document.createElement('div');
        itemWrap.setAttribute('class', 'itemWrap');

        const uniqSpan = document.createElement('span');
        uniqSpan.setAttribute('class', 'uniqSpan');
        uniqSpan.innerText = element.uniqNo;

        const checkBtn = document.createElement('span');
        checkBtn.innerText = 'done';
        if (element.isComplete) {
            checkBtn.setAttribute('class', 'material-icons checkBtnT');
        } else {
            checkBtn.setAttribute('class', 'material-icons checkBtnF');
        }
        checkBtn.addEventListener('click', () => {
            // 배열에서 선택된 항목 True/False 전환
            for (let i = 0; i < arrData.length; i++) {
                if (arrData[i].uniqNo === element.uniqNo) {
                    arrData[i].isComplete = !arrData[i].isComplete;
                }
            }

            // 배열 다시 배치
            createList();
        });

        const itemText = document.createElement('span');
        itemText.setAttribute('class', 'itemText');
        itemText.innerText = element.contents;

        const delBtn = document.createElement('span');
        delBtn.setAttribute('class', 'material-icons delBtn');
        delBtn.innerText = 'delete';


        delBtn.addEventListener('click', () => {
            // 배열에서 선택된 항목 삭제
            for (let i = 0; i < arrData.length; i++) {
                if (arrData[i].uniqNo === element.uniqNo) { arrData.splice(i, 1); }
            }

            // 배열 다시 배치
            createList();
        });

        itemWrap.appendChild(checkBtn); // 체크 버튼
        itemWrap.appendChild(uniqSpan); // 숨겨진 유니크값
        itemWrap.appendChild(itemText); // 할일 텍스트
        itemWrap.appendChild(delBtn);   // 삭제 버튼


        // 생성한 아이템을 부모 리스트뷰에 넣는다.
        itemList.appendChild(itemWrap);
        // <div id="itemList" class="itemList"></div>

        // 스크롤링
        itemList.scrollIntoView({ block: 'end' });

        enterText.value = '';
        enterText.focus();
    }
}



const addItem = () => {
    const getText = enterText.value;
    if (!getText) { return alert('내용을 입력해주세요.') }

    let idx = 0;

    if (arrData.length > 0) {
        idx = (arrData[arrData.length - 1].uniqNo) + 1;
    }

    arrData.push({ uniqNo: idx, isComplete: false, contents: getText });

    createList();
}





// {
//     uniqNo: 0,
//     isComplete : false,
//     contents: '',
// }