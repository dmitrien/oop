class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Invalid name');
          }
          if (!['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error('Invalid type');
          }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
    }

    levelUp() {
        if (this.health === 0) {
          throw new Error('Cannot level up a dead character');
        }
        this.level++;
        this.attack += this.attack * 0.2;
        this.defence += this.defence * 0.2;
        this.health = 100;
     }
     
    
     damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
          this.health = 0;
        }
    }      
}

class Bowerman extends Character {
    constructor(name) {
        super(name, 'Bowerman');
        this.attack = 25;
        this.defence = 25;
    }

}

class Swordsman extends Character {
    constructor(name) {
        super(name, 'Swordsman');
        this.attack = 40;
        this.defence = 10;
    }

}

class Magician extends Character {
    constructor(name) {
        super(name, 'Magician');
        this.attack = 10;
        this.defence = 40;
    }

}

class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
    }

}

class Undead extends Character {
    constructor(name) {
        super(name, 'Undead');
        this.attack = 25;
        this.defence = 25;
    }

}

class Zombie extends Character {
    constructor(name) {
        super(name, 'Zombie');
        this.attack = 40;
        this.defence = 10
    }

}

module.exports = {
    Character,
    Bowerman,
    Swordsman,
    Magician,
    Daemon,
    Undead,
    Zombie
};


