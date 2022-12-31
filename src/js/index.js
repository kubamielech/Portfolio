console.log('👍');

const navBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.navbar__mobile')
const navItems = navMobile.querySelectorAll('.navbar__item')
const shadow = document.querySelector('.shadow')
const footerYear = document.querySelector('.footer__year')
const contactInputs = document.querySelectorAll('.contact__form-input')
const contactTextArea = document.querySelector('.contact__form-text')
const contactLabels = document.querySelectorAll('.contact__form-label')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('navbar__mobile--active')
    document.body.classList.toggle('fixed-body')
}

const handleLabel = (e) => {
	if(e.target.value == '') {
		e.target.nextElementSibling.classList.toggle('contact__form-label--active');
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
navBtn.addEventListener('click', handleNav)
shadow.addEventListener('click', handleNav)
navItems.forEach(navItem => navItem.addEventListener('click', handleNav))
contactInputs.forEach(contactInput => contactInput.addEventListener('focus', handleLabel))
contactInputs.forEach(contactInput => contactInput.addEventListener('focusout', handleLabel))
contactTextArea.addEventListener('focus', handleLabel)
contactTextArea.addEventListener('focusout', handleLabel)