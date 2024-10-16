import {environments} from "./environment.js"

window.addEventListener('DOMContentLoaded', myCard())

function makeCard (card) {
    const continer = document.createElement('div')
    continer.id = 'card'
    continer.classList.add('card')

    const imgCard = document.createElement('img')
    imgCard.src = card.img
    imgCard.alt = card.description

    const titleCard = document.createElement('h2')
    titleCard.textContent = card.title

    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = card.description

    continer.appendChild(imgCard)
    continer.appendChild(titleCard)
    continer.appendChild(descriptionCard)

    document.querySelector('main').appendChild(continer)
}

function myCard (){
    environments.forEach( card => makeCard(card) )
    
}
