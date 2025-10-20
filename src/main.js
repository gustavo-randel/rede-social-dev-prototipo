import './scss/styles.scss'

import { Dropdown, Modal } from 'bootstrap'

// new post
document.getElementById('newPostBtnInput').addEventListener('click', () => {
  const modalElement = document.getElementById('postModal')
  const postModal = new Modal(modalElement)
  postModal.show()
  setTimeout(() => {
    document.getElementById('writePostInput').focus()
  }, 500)
})

// theme switcher
const themeSwitcher = document.getElementById('theme-switcher');
themeSwitcher.addEventListener('click', () => {
   const iconElement = document.querySelector('#theme-switcher>i')
    if (document.getElementById('theme').getAttribute('data-bs-theme') === 'dark') {
        document.getElementById('theme').setAttribute('data-bs-theme', 'light')
        iconElement.classList.remove('bi-moon-stars')
        iconElement.classList.add('bi-brightness-high')

    } else {
        document.getElementById('theme').setAttribute('data-bs-theme', 'dark');  
        iconElement.classList.remove('bi-brightness-high')
        iconElement.classList.add('bi-moon-stars')

    }
});