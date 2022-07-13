const actions = {
    jump: (character, isGameOver) => {
        character.classList.add('jump')

        setTimeout(() => {

            if (!isGameOver.value) {
                console.log(isGameOver.value)

                character.src = './images/mario.gif'

                character.classList.remove('jump')
            }

        }, 500)
    }
}

const configCommands = {
    ArrowUp: 'jump',
    ' ': 'jump',
    'w': 'jump'
}

export class Mario {
    constructor (character) {
        this.character = character
        this.isGameOver = { value: false }
        const isGameOver = this.isGameOver
        this.allActions = (event) => {
            console.log('Event Key ', event)
            const command = configCommands[event.key]
            actions[command](character, isGameOver)
        }
    }

    gameOver(document) {
        console.log('Game Over ', this.character)
        this.character.src = './images/mario_game_over.png'
        this.character.style.width = '75px'
        this.character.style.marginLeft = '50px'
        this.removeAllActions(document)
        this.isGameOver.value = true
        console.log('Game Over ', this.isGameOver)
    }

    addAllActions(document) {
        this.character.src = './images/mario.gif'
        document.addEventListener('keydown', this.allActions)
    }

    removeAllActions(document) {
        document.removeEventListener('keydown', this.allActions)
    }

}
