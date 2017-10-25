

class Game {
    constructor() {
        this.board = document.querySelector('#board')
        this.resetBtn = document.querySelector('#resetBtn')
        this.drawP1Btn = document.querySelector('#drawP1')
        this.drawP2Btn = document.querySelector('#drawP2')

        this.f_1 = function () {this.player1.draw(1)}
        this.f_2 = function () {this.player2.draw(1)}
        this.drawP1Btn.onclick = this.f_1.bind(this)
        this.drawP2Btn.onclick = this.f_2.bind(this)


        this.resetBtn.onclick = this.reset.bind(this)
        this.setup()
        
    }

    setup() {
        this.player1 = new Player({board:this.board,game:this,idx:0})
        this.player2 = new Player({board:this.board,game:this,idx:1})
    }

    reset() {
        this.player1.reset()
        this.player2.reset()
        this.setup()
    }

    playRandomCard() { this.play(choice(this.hand)) }

}