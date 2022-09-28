const tabBtn = document.querySelectorAll('.tab li a');

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

const navBtn = document.querySelectorAll('.nav-list>li>a');

const navOn = (tabClick) => {
    const clicked = tabClick.currentTarget;
    const clickedLi = clicked.parentNode;
    clickedLi.classList.toggle('active')
}

for(let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener('click', navOn);
}

const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.nav-header .close');
const navRight = document.querySelectorAll('.nav-on')

navClose.addEventListener('click',() => {
    for(let i = 0; i < navRight.length; i++) {
        navRight[i].classList.remove('active')
    }
});

navOpen.addEventListener('click',() => {
    for(let i = 0; i < navRight.length; i++) {
        navRight[i].classList.add('active')
    }
});