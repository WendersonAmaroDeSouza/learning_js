import { Sonic } from './sonic_script.js'
import { Mario } from './mario_script.js'

const characterView = document.querySelector('.character')
const pipe = document.querySelector('.pipe')

const characters = {
    sonic: new Sonic(characterView),
    mario: new Mario(characterView)
}

let character = null

function changeCharacter(characterName) {
    if (character != null) {
        character.removeAllActions(document)
    }
    character = characters[characterName]
    character.addAllActions(document)
}

const selectOtherCharacter = (event) => {
    let characterName = ''
    switch (event.key) {
        case 'a': characterName = 'mario'; break;
        case 's': characterName = 'sonic'; break;
    }
    if (characterName !== '') {
        changeCharacter(characterName)
    }
}

document.addEventListener('keydown', selectOtherCharacter)

changeCharacter('sonic')

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const characterPosition = +window.getComputedStyle(characterView).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0 && characterPosition < 80) {

        character.gameOver(document)

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        characterView.style.animation = 'none'
        characterView.style.bottom = `${characterPosition}px`

        console.log(character)

        clearInterval(loop)

    }

})