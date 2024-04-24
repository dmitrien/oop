const { Magician } = require('../class/Magician');

test('should create a character with default values', () => {
    const bowerman = new Magician('Max', 'Magician');
    const expected = {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Max',
      type: 'Magician', 
    };
    expect(bowerman).toEqual(expected);
});