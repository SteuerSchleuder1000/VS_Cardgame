
const COLORS = {
    Iron: '#732f2f',
    Spark: '#d88811',
    Thunder: '#4989a9',
    Storm: '#3e3e3e',
    Venom: '#222',
    Gold: '#ccb85b',
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


const LINKS = {
    A: `<img class='linkSymbol s1' src='images/symbol1_black.png'></img>`,
    B: `<img class='linkSymbol s1' src='images/symbol2_black.png'></img>`,
    C: `<img class='linkSymbol s1' src='images/symbol3_black.png'></img>`,
    D: `<img class='linkSymbol s1' src='images/symbol4_black.png'></img>`,
    Speed: `<img class='linkSymbol' src=${A.Speed.img}></img>`,
    Block: `<img class='linkSymbol' src=${A.Block.img}></img>`,
    Thunder: `<div class='colorSymbol' style='background-color:${COLORS.Thunder}; color: white;'>Thunder</div>`,
    Storm:  `<div class='colorSymbol' style='background-color:${COLORS.Storm}; color: white;'>Storm</div>`,
    Iron:  `<div class='colorSymbol' style='background-color:${COLORS.Iron}; color: white;'>Iron</div>`,
    Spark:  `<div class='colorSymbol' style='background-color:${COLORS.Spark}; color: white;'>Spark</div>`,
    Gold:  `<div class='colorSymbol' style='background-color:${COLORS.Gold}; color: black;'>Gold</div>`,
    Venom:  `<div class='colorSymbol' style='background-color:${COLORS.Venom}; color: white;'>Venom</div>`,
}

for (var i=1;i<10;i++) {
    A['Block'+i] = {name:'Block',img:'images/shield_icon_black.png',img_white:'images/shield_icon_white.png',text:i}
}



const DL_Thunder = [
    {name:'Thunder Fist',nr:5},
    {name:'Skyward Strike',nr:3},
    {name:'Vortex Punch',nr:3},
    {name:'Arclight Pulse',nr:4},
    {name:'Surge',nr:2},
    {name:'Sparkover',nr:3},
    {name:'Whirlwinds',nr:4},
    {name:'Storm Cell Shock',nr:2},
    {name:'Jet Wind Strike',nr:4},
]

const DL_Snake = [
    {name:'Piercing Bite',nr:4},
    {name:'Snake Spiral',nr:5},
    {name:'Golden Fangs',nr:3},
    {name:'Winding Strike',nr:4},
    {name:'Sinister Ritual',nr:2},
    {name:'Bound Down',nr:2},
    {name:'Venom Shock',nr:4},
    {name:'Toxic Breath',nr:3},
    {name:'Serpent Scales',nr:4},
]


var CARDS = {

    'Flame Punch': 
    {
        name: 'Flame Punch',
        power: 2, 
        color: 'Spark',
        zone: 'A', 
        attributes: [A.Block1],
        text:`${LINKS.A}<b> Link:</b> +1 Power<br>
             Look at the top card of your deck. If it is a ${LINKS.Spark} card add it to your sources.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },


    'Magma Link': 
    {
        name: 'Magma Link',
        power: 1, 
        color: 'Spark',
        zone: 'B', 
        attributes: [],
        text:`Reveal any number of ${LINKS.Spark} cards from hand: Gain that much power.`,
        image: 'images/cards/wl.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    }, 

    'Molten Grasp': 
    {
        name: 'Molten Grasp', 
        power: 4, 
        color: 'Spark',
        zone: 'AB', 
        attributes: [],
        text:`${LINKS.Iron}<b> Link:</b> +2 Power`,
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
        power: 1, 
        color:'Iron',
        zone: 'B', 
        attributes: [A.Speed],
        text:`If this dodges an attack: you may draw a card and cancel it into a Iron attack.`,
        image: 'images/cards/wl.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },



    'Thunder Fist':
    {
        name: 'Thunder Fist',
        power: 3, 
        color:'Thunder',
        zone: 'A', 
        attributes: [],
        text:`Erase 2 cards.<br>
                <b>Erased:</b> Put this card to your sources.`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },



    'Skyward Strike':
    {
        name: 'Skyward Strike',
        power: 2, 
        color:'Storm',
        zone: 'C', 
        attributes: [A.Speed,A.Speed],
        text:`<b>VS ${LINKS.A}:</b> Destroy a source in the game.<br>
                ${LINKS.A}<b> Link:</b> Gain +2 Power`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Vortex Punch':
    {
        name: 'Vortex Punch',
        power: 3, 
        color:'Storm',
        zone: 'C', 
        attributes: [],
        text:`Put 2 previous ${LINKS.Storm} cards in your play pile under your deck: Gain ${LINKS.Speed}`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Arclight Pulse':
    {
        name: 'Arclight Pulse',
        power: 3, 
        color:'Thunder',
        zone: 'D', 
        attributes: [],
        text:`Reveal the top card of your deck: Erase it or add it as a source.<br>
            ${LINKS.Thunder}<b> Link:</b> Gain +2 Power and ${LINKS.Speed}`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Surge':
    {
        name: 'Surge',
        power: 2, 
        color:'Thunder',
        zone: 'B', 
        attributes: [A.Speed],
        text:`Restore 2 ${LINKS.Thunder} Cards as Energy.<br>
            <b>Erased:</b> Store this card as Energy`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Sparkover':
    {
        name: 'Sparkover',
        power: 3, 
        color:'Thunder',
        zone: 'AD', 
        attributes: [A.Speed],
        text:`${LINKS.A}<b> Link:</b> Can not be blocked.<br>
            <b>Erased:</b> Add this to your hand and add 1 card from your hand to your sources.`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Whirlwinds':
    {
        name: 'Whirlwinds',
        power: 2, 
        color:'Storm',
        zone: 'B', 
        attributes: [A.Speed],
        text:`${LINKS.C}<b> Link:</b> Put any number of discarded 'Whirlwinds' under your deck: Gain +2 Power for each`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Storm Cell Shock':
    {
        name: 'Storm Cell Shock',
        power: 3, 
        color:'Storm',
        zone: 'D', 
        attributes: [A.Speed],
        text:`${LINKS.D}<b> Link:</b> Scry 3<br>
                Erase 1 card: If it was a ${LINKS.Storm} card, gain its Power and its attributes`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Jet Wind Strike':
    {
        name: 'Jet Wind Strike',
        power: 2, 
        color:'Storm',
        zone: 'A', 
        attributes: [A.Speed],
        text:`${LINKS.B}<b> Link:</b> Draw 1 Card then discard 1 card.<br>
                Show any number of ${LINKS.Storm} Cards from hand, then <b>Erase</b> that many cards.`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Piercing Bite':
    {
        name: 'Piercing Bite',
        power: 1, 
        color:'Venom',
        zone: 'C', 
        attributes: [A.Speed],
        text:`${LINKS.A}<b> Link:</b> Can not be blocked by slower attacks.<br>
                <b>Hit: Afflict 1</b>`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Snake Spiral':
    {
        name: 'Snake Spiral',
        power: 3, 
        color:'Gold',
        zone: 'A', 
        attributes: [],
        text:`Look at and rearrange the top 3 cards of your deck. <b>Power up</b> with a 'Snake Spiral' amongst them.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Golden Fangs':
    {
        name: 'Golden Fangs',
        power: 1, 
        color:'Gold',
        zone: 'A', 
        attributes: [],
        text:`Turn up up to 3 sources you own. Gain +1 Power for each of your ${LINKS.Gold} sources.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Winding Strike':
    {
        name: 'Winding Strike',
        power: 3, 
        color:'Gold',
        zone: 'B', 
        attributes: [],
        text:`<b>VS ${LINKS.A}:</b> Gain +2 Power.<br><b>2x</b>${LINKS.Gold}: Gain ${LINKS.Speed}`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Sinister Ritual':
    {
        name: 'Sinister Ritual',
        power: 1, 
        color:'Venom',
        zone: 'D', 
        attributes: [A.Block3],
        text:`Look at at and rearrange the top 3 cards of your deck. You may add 2 ${LINKS.Venom} Cards amongst them to your sources.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Bound Down':
    {
        name: 'Bound Down',
        power: 1, 
        color:'Venom',
        zone: 'B', 
        attributes: [],
        text:`<b>Afflict 1</b><br>Your opponents current and next attack loose Power equal to the number of ${LINKS.Venom} sources you own.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Venom Shock':
    {
        name: 'Venom Shock',
        power: 2, 
        color:'Venom',
        zone: 'C', 
        attributes: [],
        text:`${LINKS.A}<b> Link:</b> Gain ${LINKS.Speed}<br>${LINKS.B}<b> Link:</b> Gain +3${LINKS.Block}<br><b>Blocked: Afflict 3</b>`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Toxic Breath':
    {
        name: 'Toxic Breath',
        power: 0, 
        color:'Venom',
        zone: 'D', 
        attributes: [],
        text:`Conceal up to 3 sources on the field.<br>Gain +1 Power for each concealed source you own.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Serpent Scales':
    {
        name: 'Serpent Scales',
        power: 0, 
        color:'Venom',
        zone: 'D', 
        attributes: [A.Block4],
        text:`Block 3+ Power: <b>Afflict 1</b><br>You may cancel this into a ${LINKS.A} card.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

}