const { Bowerman } = require('../class/Bowerman');

test('should create a character with default values', () => {
    const bowerman = new Bowerman('John', 'Bowerman');
    const expected = {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: 'John',
      type: 'Bowerman', 
    };
    expect(bowerman).toEqual(expected);
});