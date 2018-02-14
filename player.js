

class Player {
    constructor(options) {
        this.options = options
        this.game = options.game
        this.name = options.idx ? 'Player2': 'Player1'
        this.idx = options.idx
        options.player = this
        this.hand = new Hand(options)
        this.deck = new Deck(options)
        this.playPile = new PlayPile(options)
        this.discardPile = new DiscardPile(options)
        this.sourcePile = new SourcePile(options)
        this.damagePile = new DamagePile(options)
        this.setup()
    }

    setup() {

        this.options.x = 0
        this.options.y = 0
        this.options.player = this
        let dl = choice([DL_Thunder, DL_Rust])//[DL_Thunder,DL_Snake,DL_Star,DL_Rust])
        
        let count = 0
        for (let c of dl) {
            var cData = CARDS[c.name]
            // console.log(cData,c.name)
            for (let i=0;i<c.nr;i++) {
                cData.idx = 'p'+this.idx+'_'+count
                count += 1
                let card = new Card(this.options, cData)
                this.deck.add(card)
            }
        }
        

        this.deck.shuffle()
        console.log(this.deck)
        this.draw(5)
    }




    play(card) {
        card.remove()    
        card.pile.remove(card)
        this.playPile.add(card)
    }

    toDiscard(card) {
        card.remove()
        card.pile.remove(card)
        this.discardPile.add(card)
    }

    toTopDeck(card) {
        card.remove()
        card.pile.remove(card)
        this.deck.add(card)
    }

    toExile(card) {
        card.remove()
        card.pile.remove(card)
    }

    toHand(card) {
        card.remove()
        card.pile.remove(card)
        this.hand.add(card)
    }

    toDamage(card) {
        card.remove()
        card.pile.remove(card)
        this.damagePile.add(card)
    }

    toSource(card) {
        card.remove()
        card.pile.remove(card)
        this.sourcePile.add(card)
    }


    draw(nr) { 
        if (nr>this.deck.count()) {nr = this.deck.count()}
        for (let i=0;i<nr;i++) {
            let c = this.deck.draw()
            this.toHand(c)
        }
    }

    switchBtn(btnIdx) { 
        this.hand.switchBtn(btnIdx)
        this.playPile.switchBtn(btnIdx)
    }

    reset() {
        this.hand.reset()
        this.playPile.reset()
        this.deck.reset()
        this.sourcePile.reset()
        this.discardPile.reset()
        this.damagePile.reset()
    }
}
