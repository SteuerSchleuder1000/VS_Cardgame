

class Game {
    constructor() {
        this.board = document.querySelector('#board')
        this.resetBtn = document.querySelector('#resetBtn')

        this.setup()


        this.overlayMode = false
        this.btnIdx = 0


        this.resetBtn.onclick = this.reset.bind(this)

        document.addEventListener('wheel', (e) => {
            let btnLen = 7
            if (e.deltaY > 4) {this.btnIdx = (this.btnIdx +btnLen + 1)%btnLen}
            else if (e.deltaY < -4) {this.btnIdx = (this.btnIdx +btnLen - 1)%btnLen}
            this.switchBtn(this.btnIdx)
        })
    
        //document.addEventListener('click', (e) => {console.log(e)})

        document.addEventListener('keypress', (event) => {
            const key = event.key;

            switch(key) {

                case '1':
                    this.switchBtn(0);
                    break

                case '2':
                    this.switchBtn(1)
                    break

                case '3':
                    this.switchBtn(4)
                    break

                case '4':
                    this.switchBtn(2)
                    break

                case '5':
                    this.switchBtn(3)
                    break

                case '6':
                    this.switchBtn(5)
                    break

                case '7':
                    this.switchBtn(6)
                    break
            }
        });
        
    }

    switchBtn(btnIdx) {
        this.player1.switchBtn(btnIdx)
        this.player2.switchBtn(btnIdx)
        this.overlay.switchBtn(btnIdx)
    }

    setup() {
        this.overlay = new Overlay({board:this.board,game:this,idx:2})
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