


class Pile {
    constructor(options) {
        this.cards = []
        if (!options) {return}
        if (options.cards) {this.cards = options.cards}
        this.board = options.board
        this.game = options.game
        this.player = options.player
        this.idx = options.idx
        // this.x = 0
        // this.y = 0
        this.div
    }

    shuffle() { shuffle(this.cards) }
    count() {return this.cards.length}
    add(card) {this.cards.push(card); card.pile = this}
    remove(card) {
        if (this.idx < 2) {this.game.overlay.remove(card)}
        var idx = this.indexOf(card)
        if (idx > -1) { 
            var c = this.cards[idx]
            this.cards.splice(idx,1)
            this.updateText()
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
    // updatePosition() {
    //     this.div.style.left = this.x+'vw'
    //     this.div.style.top = this.y+'vh'
    //     this.div.style.zIndex = this.z
    // }
    overlay() {
        if (this.game.overlayMode) {return}
        for (let c of this.cards) { this.game.overlay.add(c) }
        this.game.overlay.display()
    }
    updateText() {}
}



class Overlay extends Pile {
    constructor(options) {
        super(options)
        this.div = document.querySelector('#board .overlay')
        this.closeBtn = document.querySelector('#board .overlay .close')
        this.closeBtn.onclick = this.close.bind(this)
    }

    add(card) { 
        //super.add(card)
        this.cards.push(card);
    }

    display() {
        this.game.overlayMode = true
        this.div.style.display = 'flex'
        for (var c of this.cards) {
            c.overlay(true)
            this.div.appendChild(c.div)
        }
    }

    close() {
        this.game.overlayMode = false
        this.div.style.display = 'none'
        for (var c of this.cards) { this.remove(c) }
        this.cards = []
    }

    remove(card) {
        let c = super.remove(card)
        if (!c) {return}
        card.overlay(false)
        this.div.removeChild(card.div)
    }
}







class PlayPile extends Pile {
    constructor(options) {
        super(options)
        this.x = boardPositions.play[this.idx].x
        this.y = boardPositions.play[this.idx].y
        this.class = 'playPile idx'+this.idx
    }

    add(card) { super.add(card); this.updatePosition() }
    updatePosition() {
        var i = 0
        for (var c of this.cards) {
            if (!c.div.classList.contains(this.class)) {
                c.div.className = 'card '+this.class
                c.cardBack.className = 'card '+this.class
            }
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
    sort() { this.cards.sort(function(a,b) {return (a.zones > b.zones) ? 1 : ((b.zones > a.zones) ? -1 : 0);} ) }
    updatePosition() {
        var count = this.count()
        this.sort()
        for (var i=0;i<count;i++) {
            var c = this.cards[i]
            c.div.className = 'card hand idx'+this.idx
            c.cardBack.className = 'card hand idx'+this.idx
            c.updatePosition()
        }
    }
}

class Deck extends Pile {
    constructor(options) {
        super(options)
        if (this.idx == 1) {
            this.div = document.querySelector('.opPiles .deck')
            this.showDeckBtn = document.querySelector('.opPiles .showDeck')
            this.textDiv = document.querySelector('.opPiles .deckText')
        }
        if (this.idx == 0) {
            this.div = document.querySelector('.heroPiles .deck')
            this.showDeckBtn = document.querySelector('.heroPiles .showDeck')
            this.textDiv = document.querySelector('.heroPiles .deckText')
        }

        let draw_f = function () {this.player.draw(1)}
        this.div.onclick = draw_f.bind(this)
        this.showDeckBtn.onclick = this.overlay.bind(this)
    }

    updateText() { this.textDiv.innerHTML = this.count() }
}




class DiscardPile extends Pile {
    constructor(options) {
        super(options)
        if (this.idx == 1) {this.div = document.querySelector('.opPiles .discardPile')}
        if (this.idx == 0) {this.div = document.querySelector('.heroPiles .discardPile')}
        this.div.onclick = this.overlay.bind(this)
    }
}




class SourcePile extends Pile {
    constructor(options) {
        super(options)
        if (this.idx == 1) {this.div = document.querySelector('.opPiles .sourcePile')}
        if (this.idx == 0) {this.div = document.querySelector('.heroPiles .sourcePile')}
        this.div.onclick = this.overlay.bind(this)
    }
}




class DamagePile extends Pile {
    constructor(options) {
        super(options)
        if (this.idx == 1) {this.div = document.querySelector('.opPiles .damagePile')}
        if (this.idx == 0) {this.div = document.querySelector('.heroPiles .damagePile')}
        this.div.onclick = this.overlay.bind(this)
    }
}