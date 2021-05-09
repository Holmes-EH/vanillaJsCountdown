function countdown() {
	const opening = new Date('May 19, 2021 13:45:00')
	const now = new Date()
	const timeLeft = opening - now

	const seconds = 1000
	const minutes = 1000 * 60
	const hours = minutes * 60
	const days = hours * 24

	const numberOfDays = Math.floor(timeLeft / days)
	const numberOfHours = Math.floor((timeLeft % days) / hours)
	const numberOfMinutes = Math.floor((timeLeft % hours) / minutes)
	const numberOfSeconds = Math.floor((timeLeft % minutes) / seconds)

	if (timeLeft > 1000) {
		document.getElementById('numberOfDays').innerHTML = numberOfDays
		document.getElementById('numberOfHours').innerHTML = numberOfHours
		document.getElementById('numberOfMinutes').innerHTML = numberOfMinutes
		document.getElementById('numberOfSeconds').innerHTML = numberOfSeconds
	} else {
		document.getElementById('fullCounter').innerHTML = ''
		document.getElementById('title').innerHTML = '<h1>On est ouvert !</h1>'
	}
}

countdown()
setInterval(countdown, 1000)
