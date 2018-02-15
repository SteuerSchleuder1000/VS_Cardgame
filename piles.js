


class Pile {
    constructor(options) {
        this.cards = []
        if (!options) {return}
        if (options.cards) {this.cards = options.cards}
        this.board = options.board
        this.game = options.game
        this.player = options.player
        this.idx = options.idx
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
    draw() {let c = this.cards.shift(); this.updateText(); return c}
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
        this.addCloseBtn()
        
    }

    addCloseBtn() {
        let btn = document.createElement('button')
        btn.innerHTML = 'Close'
        btn.className = 'close'
        btn.onclick = this.close.bind(this)

        this.closeBtn = btn
        this.div.appendChild(btn)
    }

    add(card) { this.cards.push(card); }

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
        // console.log(this.cards)
        for (var c of this.cards) { c.overlay(false) } //this.remove(c) }
        // console.log(this.cards)

        this.cards = []
        this.div.innerHTML = ''
        this.addCloseBtn()
        this.game.player1.playPile.display()
        this.game.player2.playPile.display()
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
        this.showPileBtn = document.querySelector('#board '+query+'s .showCombatPile')
        this.showPileBtn.onclick = this.overlay.bind(this)
    }

    add(card) { super.add(card); card.parentDiv = this.div ;this.updatePosition(); card.play() }

    overlay() {
        if (this.game.overlayMode) {return}
        for (let c of this.cards) { this.game.overlay.add(c) }
        this.game.overlay.display()
    }

    updatePosition() {
        var i = 0
        for (var c of this.cards) {
            if (!c.div.classList.contains('playPile')) {
                c.div.className = 'card '+this.class
                c.cardBack.className = 'card '+this.class
            }
            // c.updatePosition()
            if (c.scale != 1) {c.scale = 1; c.updateScale()}
            i += 1
        }
    }

    display() {
        for (let c of this.cards) { c.display() }
    }
}





class Hand extends Pile {
    constructor(options) {
        super(options)
        let query = (this.idx==0) ? '#heroHand':'#opHand'
        this.div = document.querySelector('#board '+query)

        let query2 = this.idx==1 ? '.opPiles':'.heroPiles'
        this.sortBtn = document.querySelector(query2 +' .sortHand')
        this.sortBtn.onclick = this.sort.bind(this)
    }

    draw(nr) { return false }

    add(card) { 
        super.add(card); 
        card.parentDiv = this.div; 
        //this.updatePosition(); 
        card.div.className = 'card hand idx'+this.idx
        card.cardBack.className = 'card hand idx'+this.idx
        card.display() 
    }

    remove(card) { 
        var c = super.remove(card); 
        //this.updatePosition(); 
        return c 
    }

    sort() { 
        this.cards.sort(function(a,b) {return (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0);} ) 
        for (let c of this.cards ) { c.remove() }
        for (let c of this.cards ) { c.display() }
    }

    // updatePosition() {
    //     var count = this.count()
    //     this.sort()
    //     for (var i=0;i<count;i++) {
    //         var c = this.cards[i]
    //         c.div.className = 'card hand idx'+this.idx
    //         c.cardBack.className = 'card hand idx'+this.idx
    //         // c.updatePosition()
    //     }
    // }
}






class Deck extends Pile {
    constructor(options) {
        super(options)
        let query = this.idx==1 ? '.opPiles':'.heroPiles'
        //query += ' .topDeckDiv'

        this.div = document.querySelector(query+' .deck')
        this.shuffleBtn = document.querySelector(query+' .shuffleDeck')
        this.showDeckBtn = document.querySelector(query+' .showDeck')
        //this.topDeckPlus = document.querySelector(query+' .plus')
        //this.topDeckMinus = document.querySelector(query+' .minus')
        this.topDeckBtn = document.querySelector(query+' .topDeck')
        this.textDiv = document.querySelector(query+' .deckText')

        this.topDeckIdx = 0

        let draw_f = function () {this.player.draw(1)}
        this.div.onclick = draw_f.bind(this)
        this.showDeckBtn.onclick = this.overlay.bind(this)
        this.shuffleBtn.onclick = this.shuffle.bind(this)


        // let plus_f = function() { this.updateTopDeck(1) }
        // let minus_f = function() { this.updateTopDeck(-1) }

        //this.topDeckPlus.onclick = plus_f.bind(this)
        //this.topDeckMinus.onclick = minus_f.bind(this)
        this.topDeckBtn.onclick = this.topDeck.bind(this)
    }
    
    updateText() { this.textDiv.innerHTML = this.count() }// ; this.updateTopDeck() }
    
    // updateTopDeck(idx) {
    //     if (idx) {this.topDeckIdx += idx}
    //     if (this.topDeckIdx < 0) {this.topDeckIdx = 0}
    //     if (this.topDeckIdx > this.count()) {this.topDeckIdx = this.count()}
    //     this.topDeckBtn.innerHTML = 'Top '+this.topDeckIdx
    // }

    add(card) {
        this.cards.unshift(card)
        card.remove()
        card.pile = this
        this.updateText()
    }

    addCardToTopDeck() {

        if (this.topDeckIdx >= this.cards.length-1) { return }
        this.topDeckIdx += 1

        let c = this.cards[this.topDeckIdx]
        c.overlay(true)
        this.game.overlay.div.appendChild(c.div)
        this.game.overlay.add(c)
    }

    topDeck() {
        //if (this.game.overlayMode) {return}
        //this.updateTopDeck()
        //
        //for (let i=0;i<this.topDeckIdx;i++) { this.game.overlay.add(this.cards[l-i-1]) }

        this.topDeckIdx = 0 // this.cards.length -1
        this.game.overlay.add(this.cards[0])

        let btn = document.createElement('button')
        btn.innerHTML = 'Add Card'
        btn.className = 'addCard'
        btn.onclick = this.addCardToTopDeck.bind(this)
        this.closeBtn = btn
        this.game.overlay.div.appendChild(btn)

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
