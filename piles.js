


class Pile {
    constructor(options) {
        this.cards = []
        if (!options) {return}
        if (options.cards) {this.cards = options.cards}
        this.board = options.board
        this.game = options.game
        this.player = options.player
        this.idx = options.idx
        this.x = 0
        this.y = 0
        this.div = document.createElement('div')
    }

    shuffle() { shuffle(this.cards) }
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
    display() {}
    updatePosition() {
        this.div.style.left = this.x+'vw'
        this.div.style.top = this.y+'vh'
        this.div.style.zIndex = this.z
    }
}



class Deck extends Pile {
    constructor(options) {
        super(options)
        this.div = document.createElement('div')
        this.div.className = 'deck'
        this.img = document.createElement('img')
        this.img.className = 'deckImage'
        this.img.src = 'images/cardBack.png'
        this.div.appendChild(this.img)
        this.x = 0
        this.y = 0
    }

    display() { 
        this.updatePosition()
        this.board.appendChild(this.div)
    }
}


class PlayPile extends Pile {
    constructor(options) {
        super(options)
        this.x = boardPositions.play[this.idx].x
        this.y = boardPositions.play[this.idx].y
    }

    add(card) { super.add(card); this.updatePosition() }
    updatePosition() {
        super.updatePosition()
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

    draw(nr) { return false }

    add(card) { super.add(card); this.updatePosition() }
    remove(card) { var c = super.remove(card); this.updatePosition(); return c }
    sort() { this.cards.sort(function(a,b) {return (a.class > b.class) ? 1 : ((b.class > a.class) ? -1 : 0);} ) }
    updatePosition() {
        var count = this.count()
        for (var i=0;i<count;i++) {
            var c = this.cards[i]
            var width = c.scale* (17)
            c.x = boardPositions.hand[this.idx].x + i*width - 0.5*count*width
            c.y = boardPositions.hand[this.idx].y
            c.updatePosition()
        }
    }
}

class DiscardPile extends Pile {
    constructor(options) {
        super(options)
    }
}