import Character from './character';

class Team {
  constructor(name, type, attack, defence) {
    this.char = new Character(name, type, attack, defence);
    this.teamCollection = new Map();
    this.teamCollection.set(this.char);
  }

  getIterate() {
    const values = this.teamCollection;
    const iterator = values[Symbol.iterator]();
    return iterator.next().value[0];
    // console.log(iterator.next().value[0]);
  }
}

new Team('Cartman', 'Bowman', 25, 25).getIterate();
new Team('Stan', 'Daemon', 10, 40).getIterate();
new Team('Kyle', 'Magician', 10, 40).getIterate();
new Team('Kenny', 'Swordsman', 40, 10).getIterate();
new Team('Butters', 'Undead', 25, 25).getIterate();
new Team('Timmy', 'Zombie', 40, 10).getIterate();
