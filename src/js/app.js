/* eslint-disable no-console */
import Character from './character';

class Team {
  constructor() {
    this.teamCollection = new Map();
  }

  addChar(char) {
    this.teamCollection.set(char);
  }

  [Symbol.iterator]() {
    const teamArray = [...this.teamCollection];
    let i = 0;
    return {
      next() {
        if (i !== teamArray.length) {
          i += 1;
          return {
            done: false,
            value: teamArray[i],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}

const teamCollection = new Team();
teamCollection.addChar(new Character('Cartman', 'Bowman', 25, 25));
teamCollection.addChar(new Character('Stan', 'Daemon', 10, 40));
teamCollection.addChar(new Character('Kyle', 'Magician', 10, 40));
teamCollection.addChar(new Character('Kenny', 'Swordsman', 40, 10));
teamCollection.addChar(new Character('Butters', 'Undead', 25, 25));
teamCollection.addChar(new Character('Timmy', 'Zombie', 40, 10));

for (const char of teamCollection) {
  // return char;
  console.log(char);
}
