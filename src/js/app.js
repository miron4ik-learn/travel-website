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

const header = document.getElementById('header')
const headerClassScroll = 'header--scroll'

const scrollHeader = () => {
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



// Video

const videoFile = document.getElementById('video-file'),
      videoBtn  = document.getElementById('video-btn'),
      videoIcon = document.getElementById('video-icon')

const videoIcons = {
  play: 'ri-play-line',
  pause: 'ri-pause-line',
}

const playPause = () => {
  if(videoFile.paused) {
    videoFile.play()
    videoIcon.classList.replace(videoIcons.play, videoIcons.pause)
  } else {
    videoFile.pause()
    videoIcon.classList.replace(videoIcons.pause, videoIcons.play)
  }
}

const finalVideo = () => {
  videoIcon.classList.replace(videoIcons.pause, videoIcons.play)
}

videoBtn.addEventListener('click', () => playPause())
videoFile.addEventListener('ended', () => finalVideo())



// Scroll Up

const scrollTop = document.getElementById('scroll-up')
const scrollUpClassShow = 'scrollup--show'

const scrollUp = () => {
  if(window.scrollY >= 560) {
    scrollTop.classList.add(scrollUpClassShow)
  } else {
    scrollTop.classList.remove(scrollUpClassShow)
  }
}

window.addEventListener('scroll', () => scrollUp())