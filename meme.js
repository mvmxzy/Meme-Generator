const form = document.querySelector('.form')
const displayMeme = document.querySelector('.display')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	createMemeDiv()
	form.reset()
})

displayMeme.addEventListener('click', (e) => {
	if (e.target.tagName === 'SPAN') {
		e.target.parentElement.remove()
	}
})

const createMemeDiv = () => {
	const meme = document.createElement('div')
	const deleteX = document.createElement('span')
	deleteX.innerText = 'X'
	deleteX.className = 'delete'
	meme.appendChild(deleteX)
	displayMeme.appendChild(meme)
	meme.className = 'meme'

	// Add image src and set it as background
	const urlInput = document.querySelector('input[name=memeurl]').value
	const memeImg = document.createElement('img')
	memeImg.className = 'img'
	memeImg.setAttribute('src', urlInput)

	// Add top text and add classname
	const topInput = document.querySelector('input[name=top-text]').value
	const topText = document.createElement('h2')
	topText.className = 'top'
	topText.innerText = topInput

	// Add bottom text and add classname
	const bottomText = document.createElement('h2')
	const bottomInput = document.querySelector('input[name=bottom-text]').value
	bottomText.className = 'bottom'
	bottomText.innerText = bottomInput

	// Append to the meme div
	meme.appendChild(memeImg)
	meme.appendChild(topText)
	meme.appendChild(bottomText)
}