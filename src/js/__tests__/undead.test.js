const { Undead } = require('../class/Undead');

test('should create a character with default values', () => {
    const bowerman = new Undead('Alex', 'Undead');
    const expected = {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'Alex',
      type: 'Undead', 
    };
    expect(bowerman).toEqual(expected);
});