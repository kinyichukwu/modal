'use strict';


const modalBtn = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')



modalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
})

close.addEventListener('click', (e) => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})