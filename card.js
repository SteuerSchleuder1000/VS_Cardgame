
class Card {

    constructor(options,cardOptions) {

        this.game = options.game
        this.board = options.board
        this.player = options.player
        this.pile

        this.selected = false
        this.x = options.x
        this.y = options.y
        this.z = options.z
        this.scale = this.player.idx ? 0.5:1

        cardOptions = choice(CARDS)


        this.name = cardOptions.name //rndCardName()
        this.class = cardOptions.class //choice(cardClasses)
        this.power = cardOptions.power //randInt(0,5)
        this.attributes = cardOptions.attributes
        this.text = cardOptions.text


        // if (options.attributes) {this.attributes = options.attributes}
        // else { 
        //     while (rand(0,1) > 0.5) { this.attributes.push(choice(LINKS)) }
        //     while (rand(0,1) > 0.8) { this.attributes.push(choice(BONI)) }
        // }
        
        this.attributes.sort()

        
        this.draw()
        this.updatePosition()
    }

    updatePosition() {
        this.div.style.left = this.x+'rem'
        this.div.style.top = this.y+'rem'
        this.div.style.zIndex = this.z
        // Animation loop
    }

    draw() {
        this.div = createDiv('card')

        var img = document.createElement('img')
        img.src = choice(CARD_IMAGES).img //'images/card2.jpg'
        img.className = 'cardImage'
        this.div.appendChild(img)

        var bgGradient = createDiv('bgGradient')
        this.div.appendChild(bgGradient)
        
        for (var c of this.class) {
            if (c == 'X') { c = choice(cardClasses)}

            // var zoneWrapper = createDiv('zone-wrapper')
            // var zone = createDiv('zoneDiv')
            // zoneWrapper.appendChild(zone)

            var icon = document.createElement('img')
            icon.className = 'icon'
            icon.src = 'images/'+choice(SYMBOLS)
            //zone.appendChild(icon)

            this.div.appendChild(icon)
        }


        var cardPower = createDiv('cardPower')
        this.div.appendChild(cardPower)
        for (var i=0;i<this.power;i++) { 
            var powerBlock = createDiv('block')
            cardPower.appendChild(powerBlock)
        }

        for (var a of this.attributes) {
            if (a == 'linkX') { a = 'link'+choice(cardClasses)}
            var attr = createDiv(attributeIcons[a].class+' cardAttribute')
            attr.style.color = attributeIcons[a].color
            //attr.innerHTML = attributeIcons[a].text
            //this.div.appendChild(attr)
        }

        this.playBtn = createDiv('playBtn','Play')
        this.div.appendChild(this.playBtn)
        var play_f = function () {this.player.play(this)}
        this.playBtn.onclick = play_f.bind(this)


        var attrDiv = createDiv('attributeDiv')
        this.div.appendChild(attrDiv)
        for (var a of this.attributes) {
            let attr = createDiv('attribute')
            let text = createDiv('attrText')
            text.innerHTML = randInt(1,5)
            var symbol = document.createElement('img')
            symbol.src = 'images/symbol_shield_inv.png'


            attr.appendChild(symbol)
            attr.appendChild(text)

            attrDiv.appendChild(attr)
        }

        var title = createDiv('title')
        title.innerHTML = this.name
        this.div.appendChild(title)
        
        var textBox = createDiv('textBox')
        textBox.innerHTML = `<div class='text'>${this.text}</span>`
        this.div.appendChild(textBox)

        var colorBox = createDiv('colorBox')
        colorBox.style.backgroundColor = '#732f2f'
        this.div.appendChild(colorBox)

        this.board.appendChild(this.div)

        if (this.player.idx) { this.updateScale() }
    }

    updateScale() {
        this.div.style.height = cardHeight*this.scale + 'rem'
        this.div.style.width = cardWidth*this.scale + 'rem'
        this.div.style.zoom = this.scale
    }


    toggleSelection() {
        if ( this.selected) {this.div.classList.remove('selected'); this.selected = false }
        else { this.div.classList.add('selected'); this.selected = true }
    }

    play() {
        this.playBtn.innerHTML = 'Remove'
        let f = function () { if (this.pile) {this.pile.remove(this)} }
        this.playBtn.onclick = f.bind(this)
        let rng = randInt(-7,7)
        this.div.style.webkitTransform = `rotate(${rng}deg)`
        this.div.style.transform = `rotate(${rng}deg)`
    }

    remove() { this.div.parentNode.removeChild(this.div); }

}


var CARDS = [

    {name: 'Flame Punch', power: 2, class: 'A', attributes: ['linkA','linkD'],text:`${choice(LINKS)}Link +1 Power<br>Look at the top card of your deck. If it is a 'GOLD' card add it to your hand.`},               // Starter
    {name: 'Magma Link', power: 2, class: 'AD', attributes: ['linkD'],text:'Link: +1 Power'},      // Linker
    {name: 'Molten Core', power: 4, class: 'D', attributes: [],text:'Link: +2 Power'},                // Finisher
    {name: 'Iron Shell', power: 0, class: 'B', attributes: ['linkB','linkC','block','block','block'],text:'Block 4+ Power: Instant Link'}, // Blocker
    {name: 'Ember Shot', power: 1, class: 'C', attributes: ['speed'],text:''},                        // Quick
    {name: 'Spark Kick', power: 3, class: 'B', attributes: ['linkA'],text:'VS '+choice(cardClasses)+': +2 Power'}, // Counter



]




