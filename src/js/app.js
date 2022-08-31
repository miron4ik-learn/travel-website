// Show Menu

const navMenu  = document.getElementById('nav-menu'),
      navOpen  = document.getElementById('nav-open'),
      navClose = document.getElementById('nav-close')

const navClassShow = 'nav__menu--show'

navOpen.addEventListener('click', () => {
  navMenu.classList.add(navClassShow)
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove(navClassShow)
})



// Remove Menu Mobile

const linkAction = () => {
  navMenu.classList.remove(navClassShow)
}

const navLink = document.querySelectorAll('.nav__link')
navLink.forEach(l => l.addEventListener('click', () => linkAction()))