const { Character} = require('../character');
const { Bowerman } = require('../class/Bowerman')


describe('Character', () => {
  test('should throw an error if name is not a string', () => {
      expect(() => new Character(123, 'Bowman')).toThrow('Invalid name');
  });

  test('should throw an error if name length is less than 2', () => {
      expect(() => new Character('A', 'Bowman')).toThrow('Invalid name');
  });

  test('should throw an error if name length is more than 10', () => {
      expect(() => new Character('AveryLongName', 'Bowerman')).toThrow('Invalid name');
  });

  test('should throw an error if type is invalid', () => {
      expect(() => new Character('John', 'InvalidType')).toThrow('Invalid type');
  });

  test('should level up a character', () => {
      const character = new Bowerman('John', 'Bowerman');
      character.levelUp();
      const expected = {
        attack: 30,
        defence: 30,
        health: 100,
        level: 2,
        name: 'John',
        type: 'Bowerman'
      };
      expect(expected).toEqual(character)
  });

  test('should not level up a dead character', () => {
      const character = new Bowerman('John', 'Bowerman');
      character.damage(135); 
      expect(character.health).toBe(0);
      expect(() => character.levelUp()).toThrow('Cannot level up a dead character');
  });

  test('should deal damage to a character', () => {
      const character = new Bowerman('John', 'Bowerman');
      character.damage(50); 
      expect(character.health).toBe(62.5);
  });

  test('should not allow negative health', () => {
      const character = new Bowerman('John', 'Bowerman');
      character.damage(150);
      expect(character.health).toBe(0);
  });
});
