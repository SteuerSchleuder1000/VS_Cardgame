


class Pile {
    constructor(options) {
        this.cards = []
        if (!options) {return}
        if (options.cards) {this.cards = options.cards}
        this.board = options.board
        this.game = options.game
        this.player = options.player
        this.idx = options.idx
    }

    shuffle() {}
    count() {return this.cards.length}
    add(card) {this.cards.push(card); card.pile = this}
    remove(card) {
        var idx = this.indexOf(card)
        if (idx > -1) { 
            var c = this.cards[idx]
            this.cards.splice(idx,1) 
            return c
        } else {return null}
    }
    indexOf(card) { return this.cards.indexOf(card) }
    reset() { 
        for (var c of this.cards) { c.remove() }
        this.cards = []
    }
    draw() {return this.cards.pop()}
}


class Deck extends Pile {
    constructor(options) {
        super(options)
    }
}

class PlayPile extends Pile {
    constructor(options) {
        super(options)
        this.x = boardPositions.play[this.idx].x
        this.y = boardPositions.play[this.idx].y
        console.log(this.x,this.y,this.idx)
    }

    add(card) { super.add(card); this.updatePosition() }
    updatePosition() {
        var i = 0
        for (var c of this.cards) {
            c.x = this.x
            c.y = this.y
            c.z = zPositions.play+i
            c.updatePosition()
            if (c.scale != 1) {c.scale = 1; c.updateScale()}
            i += 1
        }
    }
}



class Hand extends Pile {
    constructor(options) {
        super(options)
    }

    draw(nr) {
        console.log('HEY!')
        for (var i=0; i<nr; i++) {
            let cardOptions = {
                x: 0, 
                y: 0,
                z: zPositions.default,
                game: this.game,
                board: this.board,
                player: this.player,
            }
            this.cards.push(new Card(cardOptions))
        }
        this.sort()
        this.updatePosition()
    }

    add(card) { super.add(card); this.updatePosition() }
    remove(card) { var c = super.remove(card); this.updatePosition(); return c }
    sort() { this.cards.sort(function(a,b) {return (a.class > b.class) ? 1 : ((b.class > a.class) ? -1 : 0);} ) }
    updatePosition() {
        var count = this.count()
        for (var i=0;i<count;i++) {
            var c = this.cards[i]
            var width = c.scale* (2+cardWidth)
            c.x = boardPositions.hand[this.idx].x + i*width - 0.5*count*width
            c.y = boardPositions.hand[this.idx].y
            console.log(c.x,c.y)

            c.updatePosition()
        }
    }
}
