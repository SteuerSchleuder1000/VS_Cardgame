


var GAME

window.onload = function() { 
    GAME = new Game()
}




const SYMBOLS = ['symbol1.png','symbol2.png','symbol3.png','symbol_shield_inv.png']
const SYMBOLS_INV = ['symbol1b.png','symbol2b.png','symbol3b.png','symbol_shield.png']

const CARD_IMAGES = [
    {name:'1',img:'images/card1.jpg',inv:false},
    {name:'2',img:'images/card2.jpg',inv:false},
    {name:'3',img:'images/card3.jpg',inv:false},
    {name:'4',img:'images/card4.jpg',inv:false},
    {name:'5',img:'images/card5.jpg',inv:false},
    {name:'6',img:'images/card6.jpg',inv:false},
]

const windowWidth = 70
const windowHeight = 40

const cardWidth = 10
const cardHeight = 14

const cardClasses = ['A','B','C','D']
const cardAttributes = ['linkA','linkB','linkC','block','speed']

const BONI = ['block','speed','dominance']
const LINKS = [
    `<img class='linkSymbol s1' src='images/symbol1b.png'></img>`,
    `<img class='linkSymbol s1' src='images/symbol1b.png'></img>`,
    `<img class='linkSymbol s1' src='images/symbol1b.png'></img>`,
    `<img class='linkSymbol s1' src='images/symbol1b.png'></img>`,
]


const classIcons = {
    A: {class:'fa fa-sort',         color:'red', text:'A'},
    B: {class:'fa fa-superpowers',  color:'lightblue', text:'B'},
    C: {class:'fa fa-bolt',         color:'yellow', text:'C'},
    D: {class:'fa fa-asterisk',     color:' #8A2BE2', text:'D'},
    E: {class:'fa fa-bookmark',     color:'white', text:'E'},
}


const attributeIcons = {
    speed:      {class:'fa fa-fast-forward', color:'white', text:'S'},
    block:      {class:'fa fa-shield', color:'white', text:'B'},
    dominance:  {class:'fa fa-exclamation-circle', color:'white', text:'!'},

    linkA: classIcons.A,
    linkB: classIcons.B,
    linkC: classIcons.C,
    linkD: classIcons.D,
}


const boardPositions = {
    hand:  [{x: 0.5*windowWidth, y: 0.7*windowHeight},
            {x: 0.5*windowWidth, y: 0*windowHeight}],

    play:  [{x:0.6*windowWidth, y: 0.3*windowHeight},
            {x: 0.3*windowWidth, y: 0.3*windowHeight}],
}

const zPositions = {    
    default: 1,
    play: 10,
    hand: 3,
}















function createDiv(className,innerHTML) {
    var div = document.createElement('div')

    div.className = className
    if (innerHTML) {div.innerHTML = innerHTML}
    return div
}

function choice(arr) { return arr[Math.floor(Math.random() * arr.length)] }
function keyChoice(obj) {
    let keys = obj.keys
    let k = choice(keys)
    return obj[k]
}
function rand(min, max) { return Math.random() * (max - min) + min; }
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

function rndCardName() {
    var firstPart = ['Toxic','Vengeful','Deadly','Glibber','Hot','Heat','Sun','Flickering','Scorching','Radiating','Cluster','Burning',
                    'Scalding','Molten','Iron','Glaring','Blinding','Severe','Quick','Swift','Flaming','Scorch','Spark','Ember']
    var secondPart = ['Kick','Punch','Throw','Block','Slash','Arrow','Cut','Shatter','Shot','Shard','Blast','Bullet','Beam','Rift',
                    'Blast','Wall','Dodge','Sweep','Blade','Fall','Damage','Attack','Revenge','Counter','Blow','Blowback','Pain',
                    'Gaze','Swirl','Tornado','Storm','Breaker','Shock','Shockwave','Jet','Shield','Defense','Wrath','Flame',]
    return choice(firstPart) + ' ' + choice(secondPart)
}


function rndCardText() {

    var effects = {
        'link':5,
        'condition':1,
        'bonus':1,
        'counter':1,
    }


    const links = ['Link: ']
    const conditions = ['Block 3+ power: ','If you have 3+ cards in hand: ']
    const boni = ['+2 Power','+1 Speed','+3 Block','Draw 1 card']
}



