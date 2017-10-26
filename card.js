
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



        // Interface
        this.playBtn = createDiv('playBtn','Play')
        this.div.appendChild(this.playBtn)
        var play_f = function () {this.player.play(this)}
        this.playBtn.onclick = play_f.bind(this)


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

    play() {
        this.playBtn.innerHTML = 'Remove'
        let f = function () { if (this.pile) {this.pile.remove(this)}; this.remove() }
        this.playBtn.onclick = f.bind(this)
        let rng = randInt(-7,7)
        this.div.style.webkitTransform = `rotate(${rng}deg)`
        this.div.style.transform = `rotate(${rng}deg)`
    }

    display() { this.board.appendChild(this.div) }
    remove() { this.div.parentNode.removeChild(this.div); }

}







