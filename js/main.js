// 탭

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

// 모바일 gnb 2뎁스 여닫기

const navBtn = document.querySelectorAll('.nav-list>li>a');

const navOn = (tabClick) => {
    const clicked = tabClick.currentTarget;
    const clickedLi = clicked.parentNode;
    clickedLi.classList.toggle('active')
}

for(let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener('click', navOn);
}

// 모바일 gnb 여닫기

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

//main 페이지 헤더에 main 클래스 추가

window.addEventListener('load', () => {
    const container = document.querySelector('.container')
    const header = document.querySelector('header')

    if(container.classList.contains('main') && window.innerWidth > 1000) {
        header.classList.add('main')
    }
});

// 브라우저 창 1000px 이하 main 클래스 제거

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const container = document.querySelector('.container')
    const header = document.querySelector('header')

    if(width < 1000 && container.classList.contains('main')) {
        header.classList.remove('main')
    } else if (!container.classList.contains('main')) {
        header.classList.remove('main')
    } else {
        header.classList.add('main')
    }
});

//정보자료실 class

const boardTab = document.querySelectorAll('.list-info button')

for(let i = 0; i < boardTab.length; i++) {
    boardTab[i].addEventListener('click', (clicked) => {
        const clickedBtn = clicked.currentTarget;
        console.log(clickedBtn)

        for(let j = 0; j < boardTab.length; j++) {
            boardTab[j].classList.remove('blue-btn')
        }
        clickedBtn.classList.add('blue-btn')
    });
}