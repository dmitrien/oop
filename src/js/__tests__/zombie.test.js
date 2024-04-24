const { Zombie } = require('../class/Zombie');

test('should create a character with default values', () => {
    const bowerman = new Zombie('Tim', 'Zombie');
    const expected = {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: 'Tim',
      type: 'Zombie', 
    };
    expect(bowerman).toEqual(expected);
});