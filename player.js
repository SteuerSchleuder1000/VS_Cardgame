class Player {
    constructor(options) {
        this.options = options
        this.name = options.idx ? 'Player2': 'Player1'
        this.idx = options.idx
        options.player = this
        this.hand = new Hand(options)
        this.deck = new Deck(options)
        this.playPile = new PlayPile(options)
        this.setup()
    }

    setup() {
        this.options.x = 0
        this.options.y = 0
        this.options.player = this

        for (let i=0;i<50;i++) {
            let cardData = keyChoice(CARDS)
            cardData.id = 'p'+this.idx+'_'+i
            let c = new Card(this.options, cardData)
            this.deck.add(c)
        }
        console.log(this.deck)


        this.draw(5)
    }




    play(card) {
        var c = this.hand.remove(card)
        if (c) {
            this.playPile.add(c)
            c.play()
        }
    }

    discard(card) {

    }

    shuffleCard(card) {

    }

    exile(card) {

    }

    sourceCard(card) {

    }

    

    draw(nr) { 
        if (nr>this.deck.count()) {nr = this.deck.count()}
        for (let i=0;i<nr;i++) {
            let c = this.deck.draw()
            this.hand.add(c)
            c.display()
        }
    }

    reset() {
        this.hand.reset()
        this.playPile.reset()
    }
}