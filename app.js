class Character {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = []
    }

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

class Adventurer extends Character {
    constructor (name, role){
        super(name);
        this.role = role;
        this.inventory.push('bedroll', '50 gold coins');
    }
    scout() {
        console.log(`${this.name} is scouting ahead ...`);
        super.roll();
    }
}

class Companion extends Character{
    constructor (name, role){
        super(name);
        this.role = role;
    }
    support() {
        if (this.role === 'healer')
        {
            console.log(`${this.name} is casting a healing spell`)
        }
        else if (this.role === 'enchanter')
        {
            console.log(`${this.name} is increasing damage`)
        }
        else if (this.role === 'scavenger')
        {
            console.log(`${this.name} is searching for items`)
        }
        else {
            console.log(`${this.name} is following the adventurer`)
        }
    }
}



const robin = new Adventurer("Robin", "Wizard")
robin.inventory.push("potion", 'staff', 'wizard hat')
robin.companion = new Companion('Leo', "healer")
robin.companion.support()
robin.companion.companion = new Companion('Frank', 'enchanter')
robin.companion.companion.support()
robin.companion.inventory.push('Healing potion', 'Reviving Potion', 'Healing fruit')
robin.companion.companion.inventory.push('Damage potion', 'Strength potion', 'magic hat')
console.log(robin.companion.inventory)
console.log(robin.companion.companion.inventory)