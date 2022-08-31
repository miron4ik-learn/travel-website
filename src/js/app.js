import Swiper, { EffectCoverflow } from 'swiper'

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



// Change Background Header

const scrollHeader = () => {
  const header = document.getElementById('header')
  const headerClassScroll = 'header--scroll'

  if(window.scrollY >= 200) {
    header.classList.add(headerClassScroll)
  } else {
    header.classList.remove(headerClassScroll)
  }
}

window.addEventListener('scroll', () => scrollHeader())



// Swiper Discover

const swiperDiscover = new Swiper('.discover__container', {
  modules: [ EffectCoverflow ],
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 0,
  },
})