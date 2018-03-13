const COLORS = {
    Scrap: '#732f2f',
    Furnace: '#d88811',
    Thunder: '#4989a9',
    Storm: '#3e3e3e',
    Venom: '#222',
    Gold: '#ccb85b',
    Star: '#ccb85b',
    Aurora: 'violet',
}

const COLORS_FONT = {
    Scrap: 'white',
    Furnace: 'white',
    Thunder: 'white',
    Storm: 'white',
    Venom: 'white',
    Gold: 'white',
    Star: 'black',
    Aurora: 'white',    
}

const ELEMENTS = [
    'Scrap',
    'Furnace',
    'Storm',
    'Thunder',
    'Venom',
    'Gold',
    'Star',
    'Aurora',
]

const ZONES = {
    block: {name:'Strength',img:'images/symbols/symbol0_black.png', img_white:'images/symbols/symbol0_white.png'},
    grasp: {name:'Strength',img:'images/symbols/symbol8_black.png', img_white:'images/symbols/symbol8_white.png'},
    A: {name:'Strength',img:'images/symbols/symbol1_black.png', img_white:'images/symbols/symbol1_white.png'},
    B: {name:'Strength',img:'images/symbols/symbol5_black.png', img_white:'images/symbols/symbol5_white.png'},
    C: {name:'Strength',img:'images/symbols/symbol6_black.png', img_white:'images/symbols/symbol6_white.png'},
    D: {name:'Strength',img:'images/symbols/symbol9_black.png', img_white:'images/symbols/symbol9_white.png'},
}

ZONES.ranged = ZONES.C
ZONES.focus = ZONES.B
ZONES.energy = ZONES.A
ZONES.area = ZONES.D




const A = {
    Block:      {name:'Block',  img:'images/symbols/shield_icon_black.png', img_white:'images/symbols/shield_icon_white.png',   text:''},
    BlockX:     {name:'Block',  img:'images/symbols/shield_icon_black.png', img_white:'images/symbols/shield_icon_white.png',   text:'X'},
    Speed:      {name:'Speed',  img:'images/symbols/speed_icon_black.png',  img_white:'images/symbols/speed_icon_white.png',    text:''},
    LinkA:      {name:'LinkA',  img:ZONES.A.img,  img_white:ZONES.A.img_white,                                  text:null},
    // LinkB:      {name:'LinkB',  img:ZONES.B.img,  img_white:ZONES.B.img_white,                                  text:null},
    // LinkC:      {name:'LinkC',  img:ZONES.C.img,  img_white:ZONES.C.img_white,                                  text:null},
    // LinkD:      {name:'LinkD',  img:ZONES.D.img,  img_white:ZONES.D.img_white,                                  text:null}
}


const L = {
    A: `<img class='linkSymbol s1' src=${ZONES.A.img}></img>`,
    B: `<img class='linkSymbol s1' src=${ZONES.B.img}></img>`,
    C: `<img class='linkSymbol s1' src=${ZONES.C.img}></img>`,
    D: `<img class='linkSymbol s1' src=${ZONES.D.img}></img>`,
    Speed: `<img class='linkSymbol' src=${A.Speed.img}></img>`,
    Block: `<img class='linkSymbol' src=${A.Block.img}></img>`,
}

const E = {}

for (var i=1;i<10;i++) {
    A['Block'+i] = {name:'Block',img:'images/symbols/shield_icon_black.png',img_white:'images/symbols/shield_icon_white.png',text:i}
    A['Speed'+i] = {name:'Speed',img:'images/symbols/speed_icon_black.png',img_white:'images/symbols/speed_icon_white.png',text:i}
}

for (let e of ELEMENTS) {
    L[e] = `<div class='colorSymbol' style='background-color:${COLORS[e]}; color:${COLORS_FONT[e]};'>${e}</div>`
    L[e+'_e'] = `<div class='colorSymbol' style='background-color:${COLORS[e]}; color:${COLORS_FONT[e]};'>${e[0]}</div>`
    E[e] = `<div class='colorSymbol' style='background-color:${COLORS[e]}; color:${COLORS_FONT[e]};'>${e[0]}</div>`
}



const DL_Thunder = [

    // 3 TS
    {name:'Thunder Fist',nr:5},
    {name:'Vortex Punch',nr:3}, // Super
    {name:'Storm Cell Pulse',nr:1}, // Super

    // 2 TS
    {name:'Skyward Strike',nr:3},
    {name:'Whirlwinds',nr:4},
    {name:'Sparkover',nr:2}, // super

    // 1 TS
    {name:'Arclight Shock',nr:4},
    {name:'Jet Wind Strike',nr:4},

    // 0 TS
    {name:'Surge',nr:2},
    {name:'Stormbound',nr:2},
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


const DL_Star = [
    {name:'Dawn Blade',nr:5},
    {name:'Celestial Punch',nr:4},
    {name:'Constellation Shield',nr:2},
    {name:'Gemini Strike',nr:4},
    {name:'Sunrise Blast',nr:3},
    {name:'Star Gaze',nr:2},
    {name:'Zodiac Spear',nr:5},
    {name:'Nebula Dash',nr:2},
    {name:'Aurora Breath',nr:3},
    {name:'Morning Nova',nr:1},
    {name:'Astral Jab',nr:4},
]


const DL_Rust = [       // P: 14   B: 5 Q: 4 H: 7
    // TS 3
    {name:'Scorching Blow',nr:5}, 
    {name:'Meltdown Punch',nr:2},   // Super

    // TS 2
    {name:'Splinter Claws',nr:3},         
    {name:'Searing Chains',nr:3},   
    {name:'Furnace Strike',nr:3},   // Suepr
    {name:'Scrap Armor',nr:3},    

    // TS 1
      
    {name:'Rust Kick',nr:3},       
    {name:'Shrapnel Blast',nr:4},
    
    // TS 0
    {name:'Slag Storm',nr:2},       // Super
    {name:'Spark Flare',nr:2},
    {name:'Corrosion',nr:2},
    
]

const DL_Std = [

    {name:'Evasion', nr:2},
    {name:'Speed Up!', nr:2},
    {name:'Power Up!', nr:2},
    {name:'Defend!', nr:1},
    {name:'Quick Punch 1', nr:5},
    {name:'Quick Punch 2', nr:5},
    {name:'Neutral Punch 1', nr:7},
    {name:'Neutral Punch 2', nr:7},
    {name:'Strong Punch 1', nr:3},
    {name:'Strong Punch 2', nr:3},
    {name:'Strong Punch 3', nr:3},

]


const DL_knight = [

    {name:'Star Fall Strike', nr:5},
    {name:'Glowing Swing', nr:3},
    {name:'Double Strike', nr:2},
    {name:'Remis', nr:2},
    {name:'Blade Flick', nr:2},
    {name:'Star Dust Lunge', nr:3},
    {name:'Glimmer Whirl', nr:2},
    {name:'Golden Parry', nr:2},
    {name:'En Garde!', nr:3},
    {name:'Royale Invitation', nr:2},
    {name:'Banner Shield', nr:2},
    {name:'Blade Barrage', nr:2},
    {name:'Star Ray Burst', nr:3},
    {name:'Star Fall', nr:1},

]

const DL_surge = [

    {name:'Electro Punch', nr:6},
    {name:'Dynamo Strike', nr:3},
    {name:'Super Charge Impact', nr:2},
    {name:'Counter Punch', nr:3},
    {name:'Thunder Clap', nr:2},
    {name:'Charge Bolt', nr:2},
    {name:'Electric Grasp', nr:3},
    {name:'Mega Volt Hit', nr:4},
    {name:'Overload', nr:2},
    {name:'Charge Shield', nr:3},
    {name:'Chain Lightning', nr:2},
    {name:'Electric Nova', nr:3},
    {name:'Magnetic Pull', nr:2},
    {name:'Giga Volt Havock', nr:1},

]



// ${L.A}<b> Link:</b>
// Foundry: Molten, Forge, Rust, Slag, Molten, Iron, Searing, Ignition, Furnace, Scrap, Power, Anvil, crucible Welding
// Shrapnel, Chains, Meltdown, SMoke, stack
// SCRAP VS FURNACE


var CARDS = {

    // Electro Boy

    'Electro Punch':
    {
        name: 'Electro Punch',
        power: 4, 
        time: 3,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Surge<br>If you own 3+ Energy: +2 Power`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Dynamo Strike':
    {
        name: 'Dynamo Strike',
        power: 4, 
        time: 2,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Super (2)`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Super Charge Impact':
    {
        name: 'Super Charge Impact',
        power: 5, 
        time: 3,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Surge Draw 2 cards`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Counter Punch':
    {
        name: 'Counter Punch',
        power: 2, 
        time: 2,
        color:'Gold',
        zone: ['focus'], 
        attributes: [],
        text:`Counter a melee attack with Time 1 or less`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Thunder Clap':
    {
        name: 'Thunder Clap',
        power: 7, 
        time: 4,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Can't be countered. Draw 2 cards`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Charge Bolt':
    {
        name: 'Charge Bolt',
        power: 2, 
        time: 2,
        color:'Gold',
        zone: ['ranged'], 
        attributes: [],
        text:`Counter a ranged attack. Surge`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Electric Grasp':
    {
        name: 'Electric Grasp',
        power: 0, 
        time: 2,
        color:'Gold',
        zone: ['grasp'], 
        attributes: [],
        text:`2 Block<br>
        Your opponentn can't attack unless he discards 2 cards from his hand.<br>Next turn add this as energy.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Mega Volt Hit':
    {
        name: 'Mega Volt Hit',
        power: 6, 
        time: 4,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Super (3)`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Overload':
    {
        name: 'Overload',
        power: 0, 
        time: 0,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Choose one:<br>&#8226 Draw 2 cards<br>&#8226 +2 Energy from your deck.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Charge Shield':
    {
        name: 'Charge Shield',
        power: 0, 
        time: 1,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Aura Super (1)<br>Discard: gain +2 Block and add this as Energy`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Chain Lightning':
    {
        name: 'Chain Lightning',
        power: 2, 
        time: 3,
        color:'Gold',
        zone: ['ranged'], 
        attributes: [],
        text:`Surge<br>Gain +1 Power for each Energy you own.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Electric Nova':
    {
        name: 'Electric Nova',
        power: 2, 
        time: 3,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Super (X)<br>Gain +X Power. Can't be blocked by weaker attacks.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Magnetic Pull':
    {
        name: 'Magnetic Pull',
        power: 0, 
        time: 1,
        color:'Gold',
        zone: ['ranged'], 
        attributes: [],
        text:`Draw 1 card<br>Counter a ranged attack: Gain +1 Time`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Giga Volt Havock':
    {
        name: 'Giga Volt Havock',
        power: 9, 
        time: 4,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`ULTRA`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },







    // Fallen star

    'Star Fall Strike':
    {
        name: 'Star Fall Strike',
        power: 3, 
        time: 2,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Draw 2 cards then put 2 cards from your hand on top of your deck.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Glowing Swing':
    {
        name: 'Glowing Swing',
        power: 2, 
        time: 2,
        color:'Gold',
        zone: ['area'], 
        attributes: [],
        text:`Melee attacks of your opponent have -2 Power until your next turn.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Double Strike':
    {
        name: 'Double Strike',
        power: 4, 
        time: 3,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Has to be blocked by 2 attacks`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Remis':
    {
        name: 'Remis',
        power: 0, 
        time: 1,
        color:'Gold',
        zone: ['focus'], 
        attributes: [],
        text:`Focus Combo: +3 Power.<br>Hit: Duel`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Blade Flick':
    {
        name: 'Blade Flick',
        power: 1, 
        time: 1,
        color:'Gold',
        zone: ['focus'], 
        attributes: [],
        text:`Can't be blocked by slower attacks.<br>
        Hit: Look at your opponents hand: discard 1 card or put 2 cards onto his deck.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Star Dust Lunge':
    {
        name: 'Remis',
        power: 1, 
        time: 1,
        color:'Gold',
        zone: ['ranged'], 
        attributes: [],
        text:`Gain +1 Time. Add 1 card from your hand onto your deck.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Glimmer Whirl':
    {
        name: 'Glimmer Whirl',
        power: 3, 
        time: 3,
        color:'Gold',
        zone: ['area'], 
        attributes: [],
        text:`Block 3<br>Can't be blocked by weaker attacks.<br>Duel`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Golden Parry':
    {
        name: 'Golden Parry',
        power: 1, 
        time: 1,
        color:'Gold',
        zone: ['focus'], 
        attributes: [],
        text:`Duel: If you win counter an attack with power 2 or less<br>Draw 1 card`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'En Garde!':
    {
        name: 'En Garde!',
        power: 0, 
        time: 0,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Your opponents attacks gain -2 Power and +2 Block until your next turn.<br>Duel`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Royale Invitation':
    {
        name: 'Royale Invitation',
        power: 0, 
        time: 1,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Both players draw 2 cards.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Banner Shield':
    {
        name: 'Banner Shield',
        power: 0, 
        time: 2,
        color:'Gold',
        zone: [], 
        attributes: [],
        text:`Counter an area attack. Block 4<br>Draw 2 cards. Duel`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Blade Barrage':
    {
        name: 'Blade Barrage',
        power: 6, 
        time: 3,
        color:'Gold',
        zone: ['focus','area'], 
        attributes: [],
        text:`Combo<br>Must be blocked by 3+ attacks.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Star Ray Burst':
    {
        name: 'Royale Invitation',
        power: 2, 
        time: 2,
        color:'Gold',
        zone: ['focus','area'], 
        attributes: [],
        text:`Combo: +1 Pierce for each Sigil you own.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Star Fall':
    {
        name: 'Royale Invitation',
        power: 8, 
        time: 3,
        color:'Gold',
        zone: ['energy','area','ranged'], 
        attributes: [],
        text:`ULTRA<br>Look at your opponents hand and put it onto his deck in any order you choose.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },





    // THUNDER DECK .................................................................................

    'Thunder Fist':
    {
        name: 'Thunder Fist',
        power: 4, 
        time: 3,
        color:'Thunder',
        zone: [], 
        attributes: [],
        text:`+1 ${L.Thunder_e} Energy from deck<br>
                If you own 3+ ${L.Thunder_e} Energy: +2 Power.`,
        image: 'images/cards/thunder.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Whirlwinds':
    {
        name: 'Whirlwinds',
        power: 2, 
        time: 2,
        color:'Thunder',
        zone: ['C','D'], 
        attributes: [],
        text:`Choose 1:<br>
            &#8226 +1 ${L.Thunder_e} Energy from hand<br>
            &#8226 +1 Block<br>
            If you own 3+ ${L.Thunder_e} Energy: +2 Power`,
        image: 'images/cards/thunder.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },



    'Skyward Strike':
    {
        name: 'Skyward Strike',
        power: 2,
        time: 1, 
        color:'Thunder',
        zone: ['B'], 
        attributes: [],
        text:`Counters melee attacks with Time 1 or less<br>
              - ${L.Thunder_e}: Look at your opponents hand and discard an attack with power 2 or less from it.`,
        image: 'images/cards/thunder.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Jet Wind Strike':
    {
        name: 'Jet Wind Strike',
        power: 2, 
        time: 1,
        color:'Thunder',
        zone: ['B','C'], 
        attributes: [],
        text:`Counters Ranged attacks<br>
                Can't be blocked by slower attacks`,
        image: 'images/cards/thunder.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Vortex Punch':
    {
        name: 'Vortex Punch',
        power: 3,
        time: 3, 
        color:'Thunder',
        zone: [], 
        attributes: [],
        text:`Melee link: +3 Power`,
        image: 'images/cards/thunder.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Arclight Shock':
    {
        name: 'Arclight Shock',
        power: 3, 
        time: 1,
        color:'Thunder',
        zone: ['A','C'], 
        attributes: [],
        text:`SUPER - ${L.Thunder_e}<br>
                Hit: Destroy 1 Energy or aura on the field.`,
        image: 'images/cards/thunder.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Surge':
    {
        name: 'Surge',
        power: 0, 
        time: 0,
        color:'Thunder',
        zone: [], 
        attributes: [],
        text:`Choose 1:<br>
                &#8226 +2 ${L.Thunder_e} Energy from deck<br>
                &#8226 Your next ${L.Thunder_e} attack this turn gains +1 power for each ${L.Thunder_e} Energy you own`,
        image: 'images/cards/thunder.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Stormbound':
    {
        name: 'Stormbound',
        power: 0,
        time: 0, 
        color:'Thunder',
        zone: [], 
        attributes: [],
        text:`Choose 1: &#8226 Draw 2 cards<br>
                &#8226 Gain an extra TS this turn<br>
                &#8226 +1 ${L.Thunder_e} Energy from deck.`,
        image: 'images/cards/thunder.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Sparkover':
    {
        name: 'Sparkover',
        power: 5, 
        time: 2,
        color:'Thunder',
        zone: ['A','D'], 
        attributes: [],
        text:`SUPER - ${L.Thunder_e} ${L.Thunder_e} <br>
            If you have 2 or less cards in hand draw 3 cards.`,
        image: 'images/cards/thunder.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Storm Cell Pulse':
    {
        name: 'Storm Cell Pulse',
        power: 3, 
        time: 3,
        color:'Thunder',
        zone: ['A','D'], 
        attributes: [],
        text:`<b>SUPER -</b> ${L.Thunder_e} ${L.Thunder_e} ${L.Thunder_e}<br>
                Burn 3 cards and gain their combined power`,
        image: 'images/cards/thunder.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    




    // SCRAP DECK ...

    'Spark Flare': 
    {
        name: 'Spark Flare', 
        power: 0, 
        time: 0,
        color: 'Furnace',
        energy: [],
        zone: [], 
        attributes: [],
        text:`
            &#8226 Attack: Counter a focus attack and put this into your Energy zone<br>
            &#8226 Defense: Your next ${L.Furnace_e} attack gains +2 Power`,
        image: 'images/cards/furnace.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Corrosion': 
    {
        name: 'Corrosion', 
        power: 0, 
        time: 0,
        color: 'Scrap',
        energy: [],
        zone: [], 
        attributes: [],
        text:`Choose 2:<br>
                &#8226 Discard your top 3 cards.<br>
                &#8226 Add a card from your discard pile to your hand.<br>
                &#8226 +1 Energy from your discard pile`,
        image: 'images/cards/furnace.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    

    'Scorching Blow': 
    {
        name: 'Scorching Blow', 
        power: 4, 
        time: 3,
        color: 'Furnace',
        energy: [],
        zone: [], 
        attributes: [],
        text:`Draw 2.<br>
            Combo ${L.Scrap_e}: +1 Power`,
        image: 'images/cards/furnace.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Shrapnel Blast':
    {
        name: 'Shrapnel Blast',
        power: 1, 
        time: 1,
        color:'Scrap',
        energy: [],
        zone: ['C'], 
        attributes: [],
        text:`Discard your top 2 cards<br>
                Gain +1 Power for each ${L.Scrap_e} card discarded this way.<br>
                Critical Hit: If this deals 5+ damage, your opponent discards 1 card.`,
        image: 'images/cards/furnace.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    }, 

    'Scrap Armor': 
    {
        name: 'Scrap Armor',
        power: 0, 
        time: 2,
        color:'Scrap',
        energy: [],
        zone: [], 
        attributes: [A.Block3],
        text:`Draw 1 card<br>
            Block 3+ Power: Put this into your Energy zone.`,
        image: 'images/cards/furnace.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },



    'Splinter Claws':                     
    {
        name: 'Splinter Claws',
        power: 3, 
        time: 2,
        color:'Scrap',
        energy: [],
        zone: [], 
        attributes: [],
        text:`Can't Block<br>
                Can't be blocked by attacks with less Power<br>
                Critical Hit: If this deals 5+ damage, burn 3 cards.`,
        image: 'images/cards/furnace.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    


    'Searing Chains': 
    {
        name: 'Searing Chains',
        power: 2, 
        time: 2,
        color: 'Furnace',
        energy: [],
        zone: ['C'], 
        attributes: [],
        text:`&#8226 Attack: Look at your opponents hand and discard 1 card from it.<br>
                &#8226 Block: Counter a ranged attack and put this into your Energy zone.`,
        image: 'images/cards/furnace.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    }, 


    'Rust Kick':                     
    {
        name: 'Rust Kick',
        power: 1, 
        time: 1,
        color:'Scrap',
        energy:[],
        zone: ['B'], 
        attributes: [],
        text:`&#8226 Attack: +2 Power<br>
                &#8226 Block: Discard a Energy card of your opponent.`,
        image: 'images/cards/furnace.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },



    'Slag Storm':                     
    {
        name: 'Slag Storm',
        power: 0, 
        time: 4,
        color:'Scrap',
        energy: [],
        zone: ['D'], 
        attributes: [],
        text:`<b>ULTRA</b><br>
            Gain +4 Power for each ${L.Scrap_e} in your hand.`,
        image: 'images/cards/furnace.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },


    'Meltdown Punch':                     
    {
        name: 'Meltdown Punch',
        power: 6, 
        time: 3,
        color:'Furnace',
        energy:[],
        zone: [], 
        attributes: [],
        text:`<b>SUPER - ${L.Furnace_e}</b><br>
                Can't be blocked by normal attacks.`,
        image: 'images/cards/furnace.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Furnace Strike': 
    {
        name: 'Furnace Strike',
        power: 5, 
        time: 2,
        color: 'Furnace',
        energy: [],
        zone: [], 
        attributes: [],
        text:`<b>SUPER - ${E.Furnace}</b><br>
                Add the top 2 cards of your discard pile to your hand.`,
        image: 'images/cards/furnace.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },


    

    // SNAKE DECK...

    'Piercing Bite':
    {
        name: 'Piercing Bite',
        power: 1, 
        color:'Venom',
        zone: 'C', 
        attributes: [A.Speed],
        text:`${L.A}<b> Link:</b> Can not be blocked by slower attacks.<br>
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
        text:`Turn up up to 3 sources you own. Gain +1 Power for each of your ${L.Gold} sources.`,
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
        text:`<b>VS ${L.A}:</b> Gain +2 Power.<br><b>2x</b>${L.Gold}: Gain ${L.Speed}`,
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
        text:`Look at at and rearrange the top 3 cards of your deck. You may add 2 ${L.Venom} Cards amongst them to your sources.`,
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
        text:`<b>Afflict 1</b><br>Your opponents current and next attack loose Power equal to the number of ${L.Venom} sources you own.`,
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
        text:`${L.A}<b> Link:</b> Gain ${L.Speed}<br>${L.B}<b> Link:</b> Gain +3${L.Block}<br><b>Blocked: Afflict 3</b>`,
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
        text:`Block 3+ Power: <b>Afflict 1</b><br>You may cancel this into a ${L.A} card.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },







    // STAR

    'Dawn Blade':
    {
        name: 'Dawn Blade',
        power: 2,
        time: 2,
        color:'Aurora',
        zone: 'A', 
        attributes: [],
        text:`Gain 1 ${L.Aurora_e} Energy from your hand.<br>
            If you added a 'Dawn Blade' this way gain +2 Power.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Celestial Punch':
    {
        name: 'Celestial Punch',
        power: 4, 
        time: 3,
        color:'Star',
        zone: 'A', 
        attributes: [],
        text:`Reveal the top card of your deck. If it is a ${L.Star_e} card put it to your sources.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Constellation Shield':
    {
        name: 'Constellation Shield',
        power: 0, 
        time: 2,
        color:'Star',
        zone: 'A', 
        attributes: [A.Block4],
        text:`Block 4 Power: Add this as Energy and gain an extra TS this turn.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Gemini Strike':
    {
        name: 'Gemini Strike',
        power: 5, 
        time: 2,
        color:'Star',
        zone: 'A', 
        attributes: [],
        text:`Swap 1 source you own with a card in hand.<br>${L.A}<b> Link:</b> Align`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Sunrise Blast':
    {
        name: 'Sunrise Blast',
        power: 3, 
        time: 2,
        color:'Star',
        zone: 'D', 
        attributes: [],
        text:`Reveal the top 2 cards of your deck.<br> 
                You may add 1 of these to your hand and another as Energy.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Star Gaze':
    {
        name: 'Star Gaze',
        power: 0, 
        time: 0,
        color:'Star',
        zone: 'C', 
        attributes: [],
        text:`Look at and rearrange the top 4 cards of your deck.<br>
            Choose 1: Draw 1 card or add 2 Energy from your Deck`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Zodiac Spear':
    {
        name: 'Zodiac Spear',
        power: 3, 
        time: 1,
        color:'Star',
        zone: 'A', 
        attributes: [],
        text:`Can't block.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Nebula Dash':
    {
        name: 'Nebula Dash',
        power: 0, 
        time: 0,
        color:'Aurora',
        zone: 'D', 
        attributes: [],
        text:`RISK: Gain 1 extra TS this turn.<br>Swap up to 1 source you own with a card in hand.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Aurora Breath':
    {
        name: 'Aurora Breath',
        power: 2,
        time: 3, 
        color:'Aurora',
        zone: 'D', 
        attributes: [],
        text:`SUPER - ${L.Aurora_e} ${L.Aurora_e} ${L.Aurora_e}<br>
            Discard your hand and shuffle your discard pile into your deck.<br>
            Hit: Draw 5 cards`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Morning Nova':
    {
        name: 'Morning Nova',
        power: 10,
        time: 2, 
        color:'Aurora',
        zone: 'D', 
        attributes: [],
        text:`Reveal ${L.Aurora_e} cards in your hand and gain +1 Power for each.<br>If this has 5+ Power destroy 1 source on the board.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Astral Jab':
    {
        name: 'Astral Jab',
        power: 2,
        time: 1, 
        color:'Star',
        zone: 'D', 
        attributes: [],
        text:`Add 1 ${L.Star_e} Energy from your hand.<br>
            VS NORMAL: Draw 1 card.`,
        image: 'images/cards/dragon.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

}



// controle that key == name
for (let [key, card] of Object.entries(CARDS)) {
    if (card.name != key) {
        card.name = key
    }
    if ('time' in card) {
        let times = card.time
        for (let i=0; i< times;i++) { card.attributes.push(A.Speed) }
        //console.log(card)
    }
}