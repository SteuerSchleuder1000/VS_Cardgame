class Player {
    constructor(options,name) {
        this.name = options.idx ? 'Player2': 'Player1'
        this.idx = options.idx
        options.player = this
        this.hand = new Hand(options)
        this.deck = new Deck(options)
        this.playPile = new PlayPile(options)
        this.setup()
    }

    setup() {
        this.hand.draw(5)
    }

    play(card) {
        var c = this.hand.remove(card)
        if (c) {
            this.playPile.add(c)
            c.play()
        }
    }

    draw(nr) { this.hand.draw(nr) }

    reset() {
        this.hand.reset()
        this.playPile.reset()
    }
}