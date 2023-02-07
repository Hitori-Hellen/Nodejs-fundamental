// const xyz = require('./people'); // empty object

// console.log(xyz);
// console.log(xyz.people);

const { people, age } = require('./people');

console.log(people, age);

const os = require('os');

console.log(os.platform(), os.homedir());