const header = document.querySelector('.site-header')
const menuBtn = document.querySelector('.menu-btn')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileCloseBtn = document.querySelector('.mobile-menu__close')
const mobileLinks = document.querySelectorAll('.mobile-menu__link')
const yearEl = document.getElementById('year')

if (yearEl) {
  yearEl.textContent = new Date().getFullYear()
}

const setMenuOpen = (open) => {
  if (!mobileMenu || !menuBtn) return
  mobileMenu.classList.toggle('is-open', open)
  menuBtn.setAttribute('aria-expanded', String(open))
  document.body.style.overflow = open ? 'hidden' : ''
}

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    setMenuOpen(!mobileMenu.classList.contains('is-open'))
  })
}

if (mobileCloseBtn) {
  mobileCloseBtn.addEventListener('click', () => setMenuOpen(false))
}

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false))
})

window.addEventListener('scroll', () => {
  if (!header) return
  header.classList.toggle('is-scrolled', window.scrollY > 12)
})
