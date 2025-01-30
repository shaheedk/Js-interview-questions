const fs1 = require('fs');
const fs2 = require('node:fs');

console.log(fs1 === fs2); // true
// because fs1 and fs2 are the same module, they are equal.