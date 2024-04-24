const { Swordsman } = require('../class/Swordsman');

test('should create a character with default values', () => {
    const bowerman = new Swordsman('Carl', 'Swordsman');
    const expected = {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Carl',
      type: 'Swordsman', 
    };
    expect(bowerman).toEqual(expected);
});