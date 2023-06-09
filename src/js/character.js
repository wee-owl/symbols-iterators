export default class Character {
  constructor(name, type, attack, defence) {
    const typeArr = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

    if (typeof (name) !== 'string' || !(name.length >= 2 && name.length <= 10)) {
      throw new Error('Invalid value (string length must be between 2 and 10)');
    } else {
      this.name = name;
    }

    if (typeof (type) !== 'string' || !typeArr.includes(type)) {
      throw new Error('Invalid character name value');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Your character is dead');
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health <= 0) {
      this.levelUp();
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
