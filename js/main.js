let tabBtn = document.querySelectorAll('.tab li a');

const tabOn = (tabClick) => {
    let clicked = tabClick.currentTarget;
    const clickedLi = clicked.parentNode;
    const li = document.querySelectorAll('.tab li')

    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove('active')
    }
    clickedLi.classList.add('active')

    let tabIndex = Array.from(li).indexOf(clickedLi)
    let tabcon = document.querySelectorAll('.tab-con')

    for (let i = 0; i < tabcon.length; i++) {
        tabcon[i].classList.remove('active')
    }
    tabcon[tabIndex].classList.add('active')
};

for(let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', tabOn);
}