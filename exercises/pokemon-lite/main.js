// Pokemon lite
// =============


class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];
    }

    learnAttackSkill(attack) {
        this.skills.push(attack);
    };

    attack(attackSkill, pokemon) {

        let thisHealth = this.health;
        let thisName = this.name;
        let thisMagic = this.magic;

        this.skills.forEach(function (e) {
            if (thisHealth <= 0) {
                console.log(`${thisName} is already dead`);
            } else if (attackSkill.attackName == e.attackName) {
                if (attackSkill.magicLoss > thisMagic) {
                    console.log('Not enough magic, cannot launch attack!');
                } else {
                    console.log(`${thisName} launched skill ${attackSkill.attackName} successfully!`);
                    console.log(`${pokemon.name} got ${attackSkill.damageCaused} damage`);
                    pokemon.health -= e.damageCaused;
                    thisMagic -= e.magicLoss;
                }
            }
        });

        this.magic = thisMagic;

        if (pokemon.health <= 0) {
            console.log(`${pokemon.name} is killed!`);
        }

    };

    getMagic() {
        this.magic += 20;
        console.log(`${this.name} got 20 magic back!`);
    };

    showStatus() {
        console.log(`${this.name}: health = ${this.health}. magic = ${this.magic}.`)
    };

}

class AttackSkill {
    constructor(attackName, damageCaused, magicLoss) {
        this.attackName = attackName;
        this.damageCaused = damageCaused;
        this.magicLoss = magicLoss;
    }
}

let pikachu = new Pokemon('pikachu', 120, 80);
let bulbasaur = new Pokemon('bulbasaur', 95, 105);

let lighting = new AttackSkill('lighting', 40, 30);
let poisoning = new AttackSkill('poisoning', 20, 20);

pikachu.learnAttackSkill(lighting);
pikachu.learnAttackSkill(poisoning);

bulbasaur.learnAttackSkill(lighting);
bulbasaur.learnAttackSkill(poisoning);


pikachu.attack(lighting, bulbasaur);
// pikachu launched skill lighting successfully!
// bulbasaur got 40 damage

console.log('=====================================');

bulbasaur.attack(poisoning, pikachu);
// bulbasaur launched skill poisoning successfully!
// pikachu got 20 damage

console.log('=====================================');

pikachu.showStatus();
// pikachu: health = 100. magic = 50.
bulbasaur.showStatus();
// bulbasaur: health = 55. magic = 85.

console.log('=====================================');

pikachu.attack(lighting, bulbasaur);
// pikachu launched skill lighting successfully!
// bulbasaur got 40 damage

console.log('=====================================');

pikachu.attack(lighting, bulbasaur);
// Not enough magic, cannot launch attack!

console.log('=====================================');

pikachu.getMagic();
// pikachu got 20 magic back!

console.log('=====================================');

pikachu.attack(lighting, bulbasaur);
// pikachu launched skill lighting successfully!
// bulbasaur got 40 damage
// bulbasaur is killed!

console.log('=====================================');

bulbasaur.attack(poisoning, pikachu);
// bulbasaur is already dead

