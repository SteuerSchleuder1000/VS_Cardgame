


function getRandomCard() {

    return {
        name: rndCardName(),
        quantity: 1, 
        power: randInt(0,5), 
        color: 'Gold',
        zone: 'A', 
        attributes: ['Block'],
        text: rndCardText()
    }
}

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
