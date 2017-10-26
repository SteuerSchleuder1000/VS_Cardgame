
const LINKS = {
    A: `<img class='linkSymbol s1' src='images/symbol1_black.png'></img>`,
    B: `<img class='linkSymbol s1' src='images/symbol2_black.png'></img>`,
    C: `<img class='linkSymbol s1' src='images/symbol3_black.png'></img>`,
    D: `<img class='linkSymbol s1' src='images/symbol4_black.png'></img>`,
}

const ZONES = {
    A: {name:'Strength',img:'images/symbol1_black.png', img_white:'images/symbol1_white.png'},
    B: {name:'Strength',img:'images/symbol2_black.png', img_white:'images/symbol2_white.png'},
    C: {name:'Strength',img:'images/symbol3_black.png', img_white:'images/symbol3_white.png'},
    D: {name:'Strength',img:'images/symbol4_black.png', img_white:'images/symbol4_white.png'},
}

const A = {
    Block:      {name:'Block',  img:'images/shield_icon_black.png', img_white:'images/shield_icon_white.png',   text:''},
    BlockX:     {name:'Block',  img:'images/shield_icon_black.png', img_white:'images/shield_icon_white.png',   text:'X'},
    Speed:      {name:'Speed',  img:'images/speed_icon_black.png',  img_white:'images/speed_icon_white.png',    text:null},
    LinkA:      {name:'LinkA',  img:ZONES.A.img,  img_white:ZONES.A.img_white,                                  text:null},
    LinkB:      {name:'LinkB',  img:ZONES.B.img,  img_white:ZONES.B.img_white,                                  text:null},
    LinkC:      {name:'LinkC',  img:ZONES.C.img,  img_white:ZONES.C.img_white,                                  text:null},
    LinkD:      {name:'LinkD',  img:ZONES.D.img,  img_white:ZONES.D.img_white,                                  text:null}
}

for (var i=1;i<10;i++) {
    A['Block'+i] = {name:'Block',img:'images/shield_icon_black.png',img_white:'images/shield_icon_white.png',text:i}
}

const COLORS = {
    Iron: '#732f2f',
    Fire: '#d88811',
}




var CARDS = {

    'Flame Punch': 
    {
        name: 'Flame Punch',
        power: 2, 
        color: 'Fire',
        zone: 'A', 
        attributes: [A.Block1],
        text:`${LINKS.A}<b> Link:</b> +1 Power<br>
             Look at the top card of your deck. If it is a 'Fire' card add it to your sources.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },


    'Magma Link': 
    {
        name: 'Magma Link',
        power: 1, 
        color: 'Fire',
        zone: 'B', 
        attributes: [],
        text:`Reveal any number of Fire cards from hand: Gain that much power.`,
        image: 'images/cards/knives.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    }, 

    'Molten Grasp': 
    {
        name: 'Molten Grasp', 
        power: 4, 
        color: 'Fire',
        zone: 'AB', 
        attributes: [],
        text:`${keyChoice(LINKS)}<b> Link:</b> +2 Power`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },


    'Iron Wall': 
    {
        name: 'Iron Wall',
        power: 0, 
        color:'Iron',
        zone: 'B', 
        attributes: [A.Block5],
        text:`Block 4+ Power: Cancel this attack and play a ${LINKS.A} card.`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },


    'Shrapnel Blast':
    {
        name: 'Shrapnel Blast',
        power: 1, 
        color:'Iron',
        zone: 'C', 
        attributes: [A.Speed],
        text:`Put 2 Iron cards in your discard pile ontop of your deck: Gain +2 Power.<br>
                ${LINKS.B} <b>Link:</b> Can not be dodged.`,
        image: 'images/cards/temple.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },   


    'Iron Sparks':                     
    {
        name: 'Iron Sparks',
        quantity: 1, 
        power: 1, 
        color:'Iron',
        zone: 'B', 
        attributes: [A.Speed],
        text:`If this dodges an attack: you may draw a card and cancel it into a Iron attack.`,
        image: 'images/cards/wl.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    }, 

}