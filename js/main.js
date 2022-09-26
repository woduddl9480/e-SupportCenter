let tabBtn = document.querySelectorAll('.tab li a');
console.log(tabBtn)

function tabOn(tabClick) {
    let clicked = tabClick.currentTarget;
    let clickedLi = clicked.parentNode;
    console.log(clicked)
    tabClick.preventDefault();
}

for(let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click',tabOn);
}