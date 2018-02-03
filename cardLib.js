const COLORS = {
    Scrap: '#732f2f',
    Furnace: '#d88811',
    Thunder: '#4989a9',
    Storm: '#3e3e3e',
    Venom: '#222',
    Gold: '#ccb85b',
    Star: 'gold',
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
    A: {name:'Strength',img:'images/symbols/symbol1_black.png', img_white:'images/symbols/symbol1_white.png'},
    B: {name:'Strength',img:'images/symbols/symbol5_black.png', img_white:'images/symbols/symbol5_white.png'},
    C: {name:'Strength',img:'images/symbols/symbol6_black.png', img_white:'images/symbols/symbol6_white.png'},
    D: {name:'Strength',img:'images/symbols/symbol9_black.png', img_white:'images/symbols/symbol9_white.png'},
}

const A = {
    Block:      {name:'Block',  img:'images/symbols/shield_icon_black.png', img_white:'images/symbols/shield_icon_white.png',   text:''},
    BlockX:     {name:'Block',  img:'images/symbols/shield_icon_black.png', img_white:'images/symbols/shield_icon_white.png',   text:'X'},
    Speed:      {name:'Speed',  img:'images/symbols/speed_icon_black.png',  img_white:'images/symbols/speed_icon_white.png',    text:null},
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
}

for (let e of ELEMENTS) {
    L[e] = `<div class='colorSymbol' style='background-color:${COLORS[e]}; color:${COLORS_FONT[e]};'>${e}</div>`
    L[e+'_e'] = `<div class='colorSymbol' style='background-color:${COLORS[e]}; color:${COLORS_FONT[e]};'>${e[0]}</div>`
    E[e] = `<div class='colorSymbol' style='background-color:${COLORS[e]}; color:${COLORS_FONT[e]};'>${e[0]}</div>`
}



const DL_Thunder = [

    // Level 0
    {name:'Thunder Fist',nr:5},
    {name:'Skyward Strike',nr:3},
    {name:'Vortex Punch',nr:3},
    {name:'Whirlwinds',nr:4},

    // Level 1
    {name:'Arclight Pulse',nr:4},
    {name:'Jet Wind Strike',nr:4},
    {name:'Surge',nr:2},
    {name:'Sparkover',nr:3},
    

    // Level 2
    {name:'Storm Cell Shock',nr:2},
    
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
]


const DL_Rust = [       // P: 14   B: 5 Q: 4 H: 7
    // Level 0
    {name:'Scorching Blow',nr:4},   // Furnace          Punch
    {name:'Scrap Armor',nr:5},      // Scrap            Block
    {name:'Splinter Claws',nr:4},      // Scrap        Punch
    {name:'Shrapnel Blast',nr:4},   // Scrap            Quick

    // Level 1
    {name:'Furnace Strike',nr:5},   // Furnace          Heavy
    {name:'Searing Chains',nr:3},   // Furnace          Punch
    {name:'Rust Kick',nr:3},        // Scrap            Punch

    // Level 2
    {name:'Slag Storm',nr:1},       // Scrap            Heavy
    {name:'Meltdown Punch',nr:1},   // Furnace          Heavy
]

const DL_Std = [
    // {name:'Punch 1',nr:5},
    // {name:'Punch 2',nr:5},
    // {name:'Quick 1',nr:2},
    // {name:'Quick 2',nr:2},
    // {name:'Heavy 1',nr:2},
    // {name:'Heavy 2',nr:2},
    // {name:'Block',nr:4},

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

//const DL_Word = [{name:'Word 1',nr:5}]



// ${L.A}<b> Link:</b>
// Foundry: Molten, Forge, Rust, Slag, Molten, Iron, Searing, Ignition, Furnace, Scrap, Power, Anvil, crucible Welding
// Shrapnel, Chains, Meltdown, SMoke, stack
// SCRAP VS FURNACE


var CARDS = {

    'Evasion':
    {
        name: 'Speed Up!',
        power: 0, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [A.Speed],
        text:`Draw 1 card. Dodge your opponents attack and end your turn.`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Speed Up!':
    {
        name: 'Speed Up!',
        power: 0, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [],
        text:`Reduce TIME of your next attack by 1. Draw 1 Card.`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Power Up!':
    {
        name: 'Power Up!',
        power: 0, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [],
        text:`Your next attack gains +1 Power. Draw 1 card.`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Defend!':
    {
        name: 'Defend!',
        power: 0, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [],
        text:`Your next attack gains +3 Block.`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Energy Surge':
    {
        name: 'Energy Surge',
        power: 0, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [],
        text:`Gain 2 Energy from your top.`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Quick Punch 1':
    {
        name: 'Quick Punch 1',
        power: 1, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [A.Speed],
        text:`Gain 2 Energy from your top.`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Quick Punch 2':
    {
        name: 'Quick Punch 2',
        power: 2, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [A.Speed],
        text:`1 E: +2 Power`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Quick Punch 3':
    {
        name: 'Quick Punch 2',
        power: 2, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [A.Speed],
        text:`2 E: Gain double strike`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Neutral Punch 1':
    {
        name: 'Neutral Punch 1',
        power: 2, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [A.Speed,A.Speed],
        text:`Draw 2 cards`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Neutral Punch 2':
    {
        name: 'Neutral Punch 2',
        power: 3, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [A.Speed,A.Speed],
        text:`Gain 2 Energy from your top.`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Strong Punch 1':
    {
        name: 'Strong Punch 1',
        power: 3, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [A.Speed,A.Speed,A.Speed],
        text:`Can't be blocked by combos`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Strong Punch 2':
    {
        name: 'Strong Punch 2',
        power: 4, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [A.Speed,A.Speed,A.Speed],
        text:`2 E: Gain +2 Power`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Strong Punch 3':
    {
        name: 'Strong Punch 3',
        power: 5, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [A.Speed,A.Speed,A.Speed],
        text:`Discard 2 cards`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Quick 2':
    {
        name: 'Quick 2',
        power: 2, 
        color: 'Furnace',
        energy: [],
        zone: 'A', 
        attributes: [A.Speed],
        text:``,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Heavy 1':
    {
        name: 'Heavy 1',
        power: 4, 
        color: 'Furnace',
        energy: [],
        zone: 'A', 
        attributes: [],
        text:``,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Heavy 2':
    {
        name: 'Heavy 2',
        power: 5, 
        color: 'Furnace',
        energy: [],
        zone: 'A', 
        attributes: [],
        text:``,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Block':
    {
        name: 'Block',
        power: 0, 
        color: 'Furnace',
        energy: [],
        zone: 'A', 
        attributes: [A.Block5,A.Speed],
        text:`If you block 3 or less Power play another attack.`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },





    // SCRAP DECK ...

    'Scorching Blow': 
    {
        name: 'Scorching Blow', 
        power: 3, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [],
        text:`<b>Level 1</b><br>
                ${L.C}<b> Link:</b>+1 Power<br>
                Add 1 charge from your deck.`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Scrap Armor': 
    {
        name: 'Scrap Armor',
        power: 0, 
        color:'Scrap',
        energy: [],
        zone: 'B', 
        attributes: [A.Block3],
        text:`Draw 2 cards.<br>
                Crit Block: Instant link. Add this as a charge.<br>
                <b>1:</b> +${L.Block2}`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Splinter Claws':                     
    {
        name: 'Splinter Claws',
        power: 2, 
        color:'Scrap',
        energy: [],
        zone: '', 
        attributes: [],
        text:`<b>Level 1</b><br>
                ${L.Scrap} Link: <b>Break</b><br>
                <b>1</b>: +2 Power`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },

    'Shrapnel Blast':
    {
        name: 'Shrapnel Blast',
        power: 2, 
        color:'Scrap',
        energy: [],
        zone: 'C', 
        attributes: [A.Speed],
        text:`Counter an attack: Draw 2 cards<br>
                Breaker`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    }, 








    'Furnace Strike': 
    {
        name: 'Furnace Strike',
        power: 4, 
        color: 'Furnace',
        energy: [],
        zone: 'A', 
        attributes: [A.LinkA],
        text:`Level 2<br>
                <b>SUPER - ${E.Furnace} ${E.Furnace} ${E.Furnace}</b><br>
                Level Link: +2B`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },


    'Searing Chains': 
    {
        name: 'Searing Chains',
        power: 2, 
        color: 'Furnace',
        energy: [],
        zone: '', 
        attributes: [A.Block1],
        text:`Level 2<br>
                Blocked or hit: Look at your opponents hand and discard 1 card from it.`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    }, 

    'Rust Kick':                     
    {
        name: 'Rust Kick',
        power: 2, 
        color:'Scrap',
        energy:[],
        zone: 'C', 
        attributes: [],
        text:`Level 3<br>
                Level Link: Destroy 2 charges in game<br>
                ${L.Furnace} Link: +2 charges from your deck<br>
                ${L.Scrap} Link: draw 2 cards`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },





    'Slag Storm':                     
    {
        name: 'Slag Storm',
        power: 2, 
        color:'Scrap',
        energy: [],
        zone: 'AD', 
        attributes: [A.LinkA],
        text:`<b>SUPER - ${L.Scrap_e} ${L.Scrap_e} ${L.Scrap_e}</b>, Level 3<br>
            Level Link: Gain ${L.Speed}, draw 2 cards<br>
            Attach up to 3 cards from your hand to this attack`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },


    'Meltdown Punch':                     
    {
        name: 'Meltdown Punch',
        power: 5, 
        color:'Furnace',
        energy:[],
        zone: 'AD', 
        attributes: [A.LinkA],
        text:`<b>SUPER - ${E.Furnace} ${E.Furnace} ${E.Furnace}</b>, Level 3<br>
                Level link: +3B<br>
                Shuffle up to 10 discarded cards back into your deck.`,
        image: 'images/cards/warlock.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},
    },



    // THUNDER DECK ...

    'Thunder Fist':
    {
        name: 'Thunder Fist',
        power: 3, 
        color:'Thunder',
        zone: 'A', 
        attributes: [],
        text:`Add 1 ${L.Thunder} card from hand to your sources<br>
                ${L.A}<b> Link:</b> +1 Power`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },



    'Skyward Strike':
    {
        name: 'Skyward Strike',
        power: 2, 
        color:'Storm',
        zone: 'B', 
        attributes: [A.Speed],
        text:`<b>COUNTER ${L.A}:</b> Your opponent discards 2 cards or 1 ${L.A} card.`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Vortex Punch':
    {
        name: 'Vortex Punch',
        power: 3, 
        color:'Storm',
        zone: 'AC', 
        attributes: [],
        text:`Discard 1 ${L.Storm} card from your hand: Gain ${L.Speed}`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Arclight Pulse':
    {
        name: 'Arclight Pulse',
        power: 3, 
        color:'Thunder',
        zone: 'CD', 
        attributes: [A.Speed],
        text:`Can not block<br>
            ${L.Thunder_e} ${L.Thunder_e}: <b>COUNTER ${L.D}</b>`,
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
        text:`Look at and rearrange the top 4 cards of your deck. Add 2 in your hand and the rest to your sources.`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Sparkover':
    {
        name: 'Sparkover',
        power: 3, 
        color:'Thunder',
        zone: 'AD', 
        attributes: [],
        text:`${L.B}<b> Link:</b> Can not be evaded.<br>
            ${L.Thunder_e} ${L.Thunder_e}: +2 Power`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Whirlwinds':
    {
        name: 'Whirlwinds',
        power: 2, 
        color:'Storm',
        zone: 'B', 
        attributes: [],
        text:`If blocked you may discard this card<br>
            Put any number of discarded 'Whirlwinds' under your deck: Gain +2 Power for each`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Storm Cell Shock':
    {
        name: 'Storm Cell Shock',
        power: 5, 
        color:'Storm',
        zone: 'D', 
        attributes: [],
        text:`<b>SUPER -</b> ${L.Thunder_e} ${L.Thunder_e} ${L.Storm_e} ${L.Storm_e}<br>
                Can not be blocked or evaded<br>
                Draw cards until you have 5 cards in hand.`,
        image: 'images/cards/sea.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Jet Wind Strike':
    {
        name: 'Jet Wind Strike',
        power: 2, 
        color:'Storm',
        zone: 'A', 
        attributes: [A.Speed,A.Speed],
        text:`<b>COUNTER</b> ${L.D}: Draw 2 card.<br>
                Add 1 discarded ${L.Storm} card to your sources.`,
        image: 'images/cards/sea.png',
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

    'Dawn Blade':
    {
        name: 'Dawn Blade',
        power: 2, 
        color:'Aurora',
        zone: 'AD', 
        attributes: [],
        text:`Reveal another 'Dawn Blade' from hand: +2 Power.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Celestial Punch':
    {
        name: 'Celestial Punch',
        power: 3, 
        color:'Star',
        zone: 'AD', 
        attributes: [],
        text:`Reveal the top card of your deck. If it is a ${L.Aurora} card put it to your sources.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Constellation Shield':
    {
        name: 'Constellation Shield',
        power: 0, 
        color:'Star',
        zone: 'B', 
        attributes: [A.Block1],
        text:`Restore 1 ${L.Star} source<br>Gain +1 ${L.Block} for each ${L.Star} source you own`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Gemini Strike':
    {
        name: 'Gemini Strike',
        power: 0, 
        color:'Star',
        zone: 'C', 
        attributes: [A.Block1],
        text:`Swap 1 source you own with a card in hand.<br>${L.A}<b> Link:</b> Align`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Sunrise Blast':
    {
        name: 'Sunrise Blast',
        power: 1, 
        color:'Star',
        zone: 'CD', 
        attributes: [A.Block1],
        text:`Look at and rearrange the top 3 cards of your deck.<br> 
                Put the top card of your deck to your sources and gain that much Power`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Star Gaze':
    {
        name: 'Star Gaze',
        power: 1, 
        color:'Star',
        zone: 'CD', 
        attributes: [A.Block1],
        text:`Look at and rearrange the top 4 cards of your deck. Restore a ${L.Aurora} card to your sources.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Star Gaze':
    {
        name: 'Star Gaze',
        power: 0, 
        color:'Star',
        zone: 'CD', 
        attributes: [A.Block3],
        text:`Look at and rearrange the top 4 cards of your deck. Restore a ${L.Aurora} card to your sources.<br>
                Cancel this card into a ${L.A} attack.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Zodiac Spear':
    {
        name: 'Zodiac Spear',
        power: 2, 
        color:'Star',
        zone: 'C', 
        attributes: [A.Speed],
        text:`Blocked: Add this to your sources.<br>${L.Star}<b> Link:</b> Attach a ${L.Star} source to this card.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },


    'Nebula Dash':
    {
        name: 'Nebula Dash',
        power: 2, 
        color:'Aurora',
        zone: 'C', 
        attributes: [A.Speed],
        text:`Discard to give your attack ${L.Speed}<br>Swap 1 source you own with a card in hand.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

    'Aurora Breath':
    {
        name: 'Aurora Breath',
        power: 2, 
        color:'Aurora',
        zone: 'C', 
        attributes: [A.Speed],
        text:`Reveal ${L.Aurora} cards in your hand and gain +1 Power for each.<br>If this has 5+ Power destroy 1 source on the board.`,
        image: 'images/cards/missiles.png',
        img_o: {zone:'white', power:'white', attribute: 'white'},   
    },

}



// controle that key == name
for (let [key, card] of Object.entries(CARDS)) {
    if (card.name != key) {
        card.name = key
    }
}