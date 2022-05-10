const nav = document.querySelector('nav.mobile')
const captions = document.querySelectorAll('.dropdown-caption')
const darkBg = document.querySelector('.dark-background')
for (let elem of captions) {
    elem.addEventListener('click', () => {
        elem.parentElement.classList.toggle('dd-show')
    })
}

function menu() {
    nav.classList.toggle('active')
    darkBg.classList.toggle('active')
}