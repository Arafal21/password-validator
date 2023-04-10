const input = document.querySelector('input.password')
const btnForVisiblePassword = document.querySelector('.password-hidden')
const btnForHidePassword = document.querySelector('.password-visible')
const textForPasswordPower = document.querySelector('.text-for-password-power')
const inputContainer = document.querySelector('.input-container')
const passwordRate = document.querySelector('.password-rate')

// controls
const minCharactersControl = document.querySelector('.min-characters-control')
const lowerCaseControl = document.querySelector('.lower-case-control')
const upperCaseControl = document.querySelector('.upper-case-control')
const numbersControl = document.querySelector('.numbers-control')
const specialCharactersControl = document.querySelector('.special-characters-control')

// regexp
const minCharacters = 15
const lowerCaseLetters = /[a-z]/
const upperCaseLetters = /[A-Z]/
const numbers = /[0-9]/
const specialCharacters = /[!@#$%^&*()-]/

// dark/light mode
const body = document.querySelector('body')
const toggleDarkMode = document.querySelector('#toggle')
const toggle = document.querySelector('label.toggle')
const ball = document.querySelector('span.ball')

const switchDarkLightMode = () => {
	if (body.getAttribute('data-mode') === 'light') {
		body.setAttribute('data-mode', 'dark')

		toggle.classList.add('toggle-dark')
		ball.classList.add('ball-dark')
	} else {
		body.setAttribute('data-mode', 'light')

		toggle.classList.remove('toggle-dark')
		ball.classList.remove('ball-dark')
	}
}

toggle.addEventListener('keydown', e => {
	if (e.key === 'Enter') {
		switchDarkLightMode()
	}
})

const minCharactersCheck = () => {
	if (input.value.length >= 15) {
		minCharactersControl.classList.add('active')
	}
}

const lowerCaseLettersCheck = () => {
	if (input.value.match(lowerCaseLetters)) {
		lowerCaseControl.classList.add('active')
	}
}

const refresh = () => {
	if (
		input.value.length >= minCharacters !== 1 ||
		input.value.match(lowerCaseLetters) !== 1 ||
		input.value.match(upperCaseLetters) !== 1 ||
		input.value.match(numbers) !== 1 ||
		input.value.match(specialCharacters) !== 1
	) {
		minCharactersControl.classList.remove('active')
		lowerCaseControl.classList.remove('active')
		upperCaseControl.classList.remove('active')
		numbersControl.classList.remove('active')
		specialCharactersControl.classList.remove('active')
	}
}

const upperCaseLettersCheck = () => {
	if (input.value.match(upperCaseLetters)) {
		upperCaseControl.classList.add('active')
	}
}

const numbersCheck = () => {
	if (input.value.match(numbers)) {
		numbersControl.classList.add('active')
	}
}
const specialCharactersCheck = () => {
	if (input.value.match(specialCharacters)) {
		specialCharactersControl.classList.add('active')
	}
}

const validate = () => {
	minCharactersCheck()
	lowerCaseLettersCheck()
	upperCaseLettersCheck()
	numbersCheck()
	specialCharactersCheck()
}

const showPassword = () => {
	input.setAttribute('type', 'text')

	btnForVisiblePassword.style.display = 'none'
	btnForHidePassword.style.display = 'block'
}

const hidePassword = () => {
	input.setAttribute('type', 'password')

	btnForVisiblePassword.style.display = 'block'
	btnForHidePassword.style.display = 'none'
}

const passwordRating = () => {
	if (
		input.value.length >= 15 &&
		input.value.match(lowerCaseLetters && upperCaseLetters && numbers && specialCharacters)
	) {
		inputContainer.classList.add('good-password')
		passwordRate.textContent = 'good password 🙂'
	} else if (input.value.match(lowerCaseLetters && upperCaseLetters && numbers)) {
		inputContainer.classList.add('medium-password')
		passwordRate.textContent = 'medium password 🤨'
		inputContainer.classList.remove('good-password')
		inputContainer.classList.remove('bad-password')
	} else {
		inputContainer.classList.add('bad-password')
		passwordRate.textContent = 'bad password 😬'
		inputContainer.classList.remove('good-password')
		inputContainer.classList.remove('medium-password')
	}
}

btnForHidePassword.addEventListener('keydown', e => {
	if (e.key === 'Enter') {
		hidePassword()
	}
})

btnForVisiblePassword.addEventListener('keydown', e => {
	if (e.key === 'Enter') {
		showPassword()
	}
})

toggleDarkMode.addEventListener('click', switchDarkLightMode)
btnForHidePassword.addEventListener('click', hidePassword)
btnForVisiblePassword.addEventListener('click', showPassword)

input.addEventListener('keyup', refresh)
input.addEventListener('keyup', validate)
input.addEventListener('keyup', passwordRating)
