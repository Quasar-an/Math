const { Magician, Daemon } = require('./characters');

const magician = new Magician('Gandalf');
const daemon = new Daemon('Mephisto');

console.log(magician.attackPower(1));
console.log(daemon.attackPower(5));