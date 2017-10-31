


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

    add(card) { this.cards.push(card); card.pile = this; this.updateText()}
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
        this.updateText()
    }
    draw() {let c = this.cards.pop(); this.updateText(); return c}
    display() {}
    overlay() {
        if (this.game.overlayMode) {return}
        for (let c of this.cards) { this.game.overlay.add(c) }
        this.game.overlay.display()
    }
    updateText() { }
    switchBtn(btnIdx) { for (let c of this.cards) { c.switchBtn(btnIdx)} }
}



class Overlay extends Pile {
    constructor(options) {
        super(options)
        this.div = document.querySelector('#board .overlay')
        this.closeBtn = document.querySelector('#board .overlay .close')
        this.closeBtn.onclick = this.close.bind(this)
    }

    add(card) { 
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
        
        this.class = 'playPile idx'+this.idx
        let query = (this.idx==0) ? '.heroPile':'.opPile'
        this.div = document.querySelector('#board #playPile '+query)
    }

    add(card) { super.add(card); card.parentDiv = this.div ;this.updatePosition(); card.play() }
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
        let query = (this.idx==0) ? '#heroHand':'#opHand'
        this.div = document.querySelector('#board '+query)
    }

    draw(nr) { return false }

    add(card) { super.add(card); card.parentDiv = this.div; this.updatePosition(); card.display() }
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
        let query = this.idx==1 ? '.opPiles':'.heroPiles'

        this.div = document.querySelector(query+' .deck')
        this.showDeckBtn = document.querySelector(query+' .showDeck')
        this.topDeckBtn = document.querySelector(query+' .topDeck')
        this.textDiv = document.querySelector(query+' .deckText')

        let draw_f = function () {this.player.draw(1); console.log('draw')}
        this.div.onclick = draw_f.bind(this)
        this.showDeckBtn.onclick = this.overlay.bind(this)
    }
    
    updateText() { this.textDiv.innerHTML = this.count() }
    topDeck() {
        
        this.game.overlay.add()
        this.game.overlay.display()
    }
}




class DiscardPile extends Pile {
    constructor(options) {
        super(options)
        let query = this.idx==1 ? '.opPiles':'.heroPiles'
        this.div = document.querySelector(query+' .discardPile')
        this.textDiv = document.querySelector(query+' .discardText')
        this.div.onclick = this.overlay.bind(this)
    }
    updateText() { this.textDiv.innerHTML = this.count() }
}




class SourcePile extends Pile {
    constructor(options) {
        super(options)
        let query = this.idx==1 ? '.opPiles':'.heroPiles'
        this.div = document.querySelector(query+' .sourcePile')
        this.textDiv = document.querySelector(query+' .sourceText')
        this.div.onclick = this.overlay.bind(this)
    }
    updateText() { 
        let colors = []
        let count = []

        for (let c of this.cards) {
            let idx = colors.indexOf(c.color)
            if (idx == -1) {
                colors.push(c.color)
                count.push(1)
            } else {count[idx]+=1}
        }
        let text = ''
        for (let i=0;i<colors.length;i++) {
            text += L[colors[i]+'_e'] + ': '+ count[i]+'<br>'
        }
        this.textDiv.innerHTML = text
    }
}




class DamagePile extends Pile {
    constructor(options) {
        super(options)
        let query = this.idx==1 ? '.opPiles':'.heroPiles'
        this.div = document.querySelector(query+' .damagePile')
        this.div.onclick = this.overlay.bind(this)
        this.textDiv = document.querySelector(query+' .damageText')
    }
    updateText() { 
        let damage = 0
        for (var c of this.cards) { damage += c.power}
        this.textDiv.innerHTML = damage
    }
}