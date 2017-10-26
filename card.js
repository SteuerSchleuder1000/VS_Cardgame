
class Card {

    constructor(options,cardOptions) {

        this.game = options.game
        this.board = options.board
        this.player = options.player
        this.id = 2//cardOptions.id
        this.pile

        this.selected = false
        this.x = options.x
        this.y = options.y
        this.z = options.z
        this.scale = this.player.idx ? 0.5:1

        if (!cardOptions) { cardOptions = keyChoice(CARDS); this.id = randInt(0,1000000) }

        this.name =         cardOptions.name
        this.class =        cardOptions.zone
        this.power =        cardOptions.power
        this.attributes =   cardOptions.attributes
        this.text =         cardOptions.text
        this.image =        cardOptions.image
        this.img_o =        cardOptions.img_o
        this.color =        cardOptions.color
                
        this.draw()
        this.updatePosition()
    }



    draw() {


        this.div = createDiv('card')
        this.div.id = this.id
        onclick = this.toggleSelection.bind(this)


        // Background
        let img = document.createElement('img')
        img.src = this.image
        img.className = 'cardImage'
        this.div.appendChild(img)

        let bgGradient = createDiv('bgGradient')
        bgGradient.id = this.id
        bgGradient.onclick = this.toggleSelection.bind(this)
        this.div.appendChild(bgGradient)
        


        // Zones
        for (let c of this.class) {
            let icon = document.createElement('img')
            icon.className = 'icon'
            if (this.img_o.zone == 'white') { icon.src = ZONES[c].img_white }
            else { icon.src = ZONES[c].img }
            this.div.appendChild(icon)
        }

        // Power
        var cardPower = createDiv('cardPower')
        this.div.appendChild(cardPower)
        for (var i=0;i<this.power;i++) { 
            let p = createDiv('block')
            if (this.img_o.power == 'white') {p.style.backgroundColor = 'white'}
            else {p.style.backgroundColor = 'black'}
            cardPower.appendChild(p) 
        }


        // Attributes
        var attrDiv = createDiv('attributeDiv')
        this.div.appendChild(attrDiv)

        for (let a of this.attributes) {

            let attr = createDiv('attribute')
            let symbol = document.createElement('img')

            if (this.img_o.attribute == 'white') { symbol.src = a.img_white }
            else { symbol.src = a.img }

            attr.appendChild(symbol)

            if (a.text != null) {
                let text = createDiv('attrText')
                text.innerHTML = a.text
                if (this.img_o.attribute == 'white') { text.style.color = 'black' }
                else { text.style.color = 'white' }
                attr.appendChild(text)
            }

            attrDiv.appendChild(attr)
        }

        var title = createDiv('title')
        title.innerHTML = this.name
        this.div.appendChild(title)
        
        var textBox = createDiv('textBox')
        textBox.innerHTML = `<div class='text'>${this.text}</span>`
        this.div.appendChild(textBox)

        var colorBox = createDiv('colorBox')
        colorBox.style.backgroundColor = COLORS[this.color]
        this.div.appendChild(colorBox)

        this.playDiv = createDiv('playDiv')
        
        this.playBtn =      createDiv('playBtn','Play')
        this.discardBtn =   createDiv('playBtn','Discard')
        this.sourceBtn =    createDiv('playBtn','Source')
        this.shuffleBtn =   createDiv('playBtn','Deck')
        this.exileBtn =     createDiv('playBtn','Exile')


        let arrowLeft = document.createElement('img')
        arrowLeft.className = 'arrow left'
        arrowLeft.id = 'left'
        arrowLeft.src = 'images/speed_icon_white.png'
        arrowLeft.onclick = this.updateButtons.bind(this)

        let arrowRight = document.createElement('img')
        arrowRight.className = 'arrow right'
        arrowRight.id = 'right'
        arrowRight.src = 'images/speed_icon_white.png'
        arrowRight.onclick = this.updateButtons.bind(this)

        this.playDiv.appendChild(arrowLeft)
        this.playDiv.appendChild(arrowRight)

        this.buttons = [this.playBtn,this.discardBtn,this.sourceBtn,this.shuffleBtn,this.exileBtn]
        for (let b of this.buttons) { this.playDiv.appendChild(b); b.style.display = 'none' }
        this.playBtn.style.display = 'block'
        this.div.appendChild(this.playDiv)


        let play_f = function () {this.player.play(this)}
        let discard_f = function () {this.player.discard(this)}
        let source_f = function () {this.player.sourceCard(this)}
        let shuffle_f = function () {this.player.shuffleCard(this)}
        let exile_f = function () {this.player.exile(this)}
        

        this.playBtn.onclick = play_f.bind(this)
        this.discardBtn.onclick = discard_f.bind(this)
        this.sourceBtn.onclick = source_f.bind(this)
        this.shuffleBtn.onclick = shuffle_f.bind(this)
        this.exileBtn.onclick = exile_f.bind(this)

        this.activeBtnIdx = 0
        this.updateButtons()


        if (this.player.idx) { this.updateScale() }
    }

    updatePosition() {
        this.div.style.left = this.x+'vw'
        this.div.style.top = this.y+'vh'
        this.div.style.zIndex = this.z
    }

    updateScale() {
        this.div.style.height = 22.5*this.scale + 'vw'
        this.div.style.width = 15.75*this.scale + 'vw'
        this.div.style.zoom = this.scale
    }

    toggleSelection() {
        if ( this.selected) {this.div.classList.remove('selected'); this.selected = false }
        else { this.div.classList.add('selected'); this.selected = true }
    }

    updateButtons(e) {
        let id 
        if (e) {id = e.target.id}
        if (id == 'left') { this.activeBtnIdx = (this.activeBtnIdx + this.buttons.length -1)%this.buttons.length }
        if (id == 'right') { this.activeBtnIdx = (this.activeBtnIdx + this.buttons.length +1)%this.buttons.length }
        for (let i=0;i<this.buttons.length;i++) {
            if (i==this.activeBtnIdx) { this.buttons[i].style.display = 'block' }
            else { this.buttons[i].style.display = 'none' }
        }
    }

    play() {
        this.playBtn.innerHTML = 'Remove'
        let f = function () { if (this.pile) {this.pile.remove(this)}; this.remove() }
        this.playBtn.onclick = f.bind(this)
        let rng = randInt(-5,5)
        this.div.style.webkitTransform = `rotate(${rng}deg)`
        this.div.style.transform = `rotate(${rng}deg)`
    }

    display() { this.board.appendChild(this.div) }
    remove() { this.div.parentNode.removeChild(this.div); }
}







