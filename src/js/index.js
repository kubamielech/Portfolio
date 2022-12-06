console.log('👍');

const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.navbar__mobile')
const navItems = navMobile.querySelectorAll('.navbar__item')
const shadow = document.querySelector('.shadow')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('navbar__mobile--active')
    document.body.classList.toggle('fixed-body')
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
navBtn.addEventListener('click', handleNav)
shadow.addEventListener('click', handleNav)
navItems.forEach(navItem => navItem.addEventListener('click', handleNav))