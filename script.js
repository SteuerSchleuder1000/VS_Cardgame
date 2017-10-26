


var GAME

window.onload = function() { 
    GAME = new Game()
}




// const SYMBOLS = ['symbol1.png','symbol2.png','symbol3.png','symbol_shield_inv.png']
// const SYMBOLS_INV = ['symbol1b.png','symbol2b.png','symbol3b.png','symbol_shield.png']

// const CARD_IMAGES = [
//     {name:'1',img:'images/card1.jpg',inv:false},
//     {name:'2',img:'images/card2.jpg',inv:false},
//     {name:'3',img:'images/card3.jpg',inv:false},
//     {name:'4',img:'images/card4.jpg',inv:false},
//     {name:'5',img:'images/card5.jpg',inv:false},
//     {name:'6',img:'images/card6.jpg',inv:false},
// ]



const boardPositions = {
    hand:  [{x: 50, y: 60},
            {x: 50, y: 8}],

    play:  [{x:60, y: 18},
            {x:30, y: 18}],
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
    let keys = Object.keys(obj)
    let k = choice(keys)
    return obj[k]
}
function rand(min, max) { return Math.random() * (max - min) + min; }
function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }





