let lnbBtn = document.querySelectorAll('.lnb li a')

function lnbSlideUp(on) {
    let onMene = on.currentTarget.parentNode
    onMene.classList.add('active')
}
function lnbSlideDown(on) {
    let onMene = on.currentTarget.parentNode
    onMene.classList.remove('active')
}

for(let i = 0; i < lnbBtn.length; i++) {
    lnbBtn[i].addEventListener('mouseover', lnbSlideUp);
}
for(let i = 0; i < lnbBtn.length; i++) {
    lnbBtn[i].addEventListener('mouseout', lnbSlideDown);
}

let tabBtn = document.querySelectorAll('.tab li a');

function tabOn(tabClick) {
    let clicked = tabClick.currentTarget;
    let clickedLi = clicked.parentNode;
    let li = document.querySelectorAll('.tab li')

    for(let i = 0; i < li.length; i++) {
        li[i].classList.remove('active')
    }
    clickedLi.classList.add('active')

    let tabIndex = Array.from(li).indexOf(clickedLi)
    let tabcon = document.querySelectorAll('.tab-con')

    for(let i = 0; i < tabcon.length; i++) {
        tabcon[i].classList.remove('active')
    }
    tabcon[tabIndex].classList.add('active')
}

for(let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', tabOn);
}