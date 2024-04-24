const { Daemon } = require('../class/Daemon');

test('should create a character with default values', () => {
    const bowerman = new Daemon('Tom', 'Daemon');
    const expected = {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: 'Tom',
      type: 'Daemon', 
    };
    expect(bowerman).toEqual(expected);
});