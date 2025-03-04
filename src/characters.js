class Character {
  constructor(name, type) {
      if (!name || typeof name !== 'string' || name.length < 2 || name.length > 10) {
          throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
      }
      if (!['Magician', 'Daemon'].includes(type)) {
          throw new Error('Неверный тип персонажа');
      }

      this.name = name;
      this.type = type;
      this._attack = 100;
      this._stoned = false;
  }

  get attack() {
      return this._attack;
  }

  set attack(value) {
      if (typeof value !== 'number' || value < 0) {
          throw new Error('Атака должна быть числом больше или равным 0');
      }
      this._attack = value;
  }

  attackPower(distance) {
      if (distance < 1 || distance > 5) {
          throw new Error('Расстояние должно быть от 1 до 5 клеток');
      }

      let baseAttack = this.attack * (1 - 0.1 * (distance - 1));
      if (this._stoned) {
          baseAttack -= Math.log2(distance) * 5;
      }
      return Math.max(baseAttack, 0);
  }

  set stoned(value) {
      if (typeof value !== 'boolean') {
          throw new Error('Состояние "дурмана" должно быть boolean');
      }
      this._stoned = value;
  }

  get stoned() {
      return this._stoned;
  }
}

class Magician extends Character {
  constructor(name) {
      super(name, 'Magician');
  }
}

class Daemon extends Character {
  constructor(name) {
      super(name, 'Daemon');
  }
}

module.exports = { Magician, Daemon, Character };