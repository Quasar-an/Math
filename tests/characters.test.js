const { Magician, Daemon, Character } = require('../src/characters');

describe('Character', () => {
  let magician;
  let daemon;

  beforeEach(() => {
    magician = new Magician('Gandalf');
    daemon = new Daemon('Mephisto');
  });

  test('should create a character with valid name and type', () => {
    expect(magician.name).toBe('Gandalf');
    expect(magician.type).toBe('Magician');
    expect(daemon.name).toBe('Mephisto');
    expect(daemon.type).toBe('Daemon');
  });

  test('should throw error for invalid name', () => {
    expect(() => new Magician('A')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    expect(() => new Daemon('VeryLongName')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
  });

  test('should throw error for invalid type', () => {
    expect(() => new Character('Gandalf', 'Warrior')).toThrow('Неверный тип персонажа');
  });

  test('should calculate attack power correctly without stoned', () => {
    expect(magician.attackPower(1)).toBe(100);
    expect(magician.attackPower(2)).toBe(90);
    expect(magician.attackPower(3)).toBe(80);
    expect(magician.attackPower(4)).toBe(70);
    expect(magician.attackPower(5)).toBe(60);
  });

  test('should calculate attack power correctly with stoned', () => {
    magician.stoned = true;
    expect(magician.attackPower(2)).toBeCloseTo(85);
    expect(magician.attackPower(3)).toBeCloseTo(72.08);
    expect(magician.attackPower(4)).toBeCloseTo(60);
    expect(magician.attackPower(5)).toBeCloseTo(48.39);
  });

  test('should set stoned state correctly', () => {
    magician.stoned = true;
    expect(magician.stoned).toBe(true);

    magician.stoned = false;
    expect(magician.stoned).toBe(false);

    expect(() => (magician.stoned = 'invalid')).toThrow('Состояние "дурмана" должно быть boolean');
  });
});