const nav = document.querySelector('nav.mobile')
const captions = document.querySelectorAll('.dropdown-caption')
const darkBg = document.querySelector('.dark-background')
const menu = document.querySelectorAll('.menu')


for (let el of menu) {
    el.addEventListener('click', () => {
        nav.classList.toggle('active')
        darkBg.classList.toggle('active')
    })
}

for (let elem of captions) {
    elem.addEventListener('click', () => {
        elem.parentElement.classList.toggle('dd-show')
    })
}