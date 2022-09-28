let tabBtn = document.querySelectorAll('.tab li a');

const tabOn = (tabClick) => {
    const clicked = tabClick.currentTarget;
    const clickedLi = clicked.parentNode;
    const clickedWrap = clickedLi.parentNode.parentNode;
    const li = clickedWrap.querySelectorAll('.tab li');

    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove('active')
    }
    clickedLi.classList.add('active')

    const tabWrap = clickedLi.parentNode.parentNode;
    const tabIndex = Array.from(li).indexOf(clickedLi)
    const tabcon = tabWrap.querySelectorAll('.tab-con')

    for (let i = 0; i < tabcon.length; i++) {
        tabcon[i].classList.remove('active')
    }
    tabcon[tabIndex].classList.add('active')
};

for(let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', tabOn);
}