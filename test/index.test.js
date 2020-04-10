const assert = require('assert');
const { limit } = require('..');

console.log('Testing:');

const test = (example, expected) => {
  assert.equal(example, expected);
  console.log(`\u001B[32m✓\u001B[39m ${expected}`);
};

const throws = (func, description) => {
  assert.throws(func);
  console.log(`\u001B[32m✓\u001B[39m ${description}`);
};

// Hours
test(limit(23 + 2, 24), 1);
test(limit(3 - 17, 24), 10);
test(limit(10 + 48, 24), 10);
test(limit(3 - 24, 24), 3);
test(limit(0.5 - 13.5, 24), 11);
test(limit(-73, 24), 23);

// Minutes
test(limit(60 + 13, 60), 13);
test(limit(10 - 20, 60), 50);

// Degree
test(limit(300 + 90, 360), 30);
test(limit(90 - 180, 360), 270);

// Errors
throws(limit, 'Throws on missing value parameter');
throws(() => limit(10), 'Throws on missing max parameter');
throws(() => limit(10, -10), 'Throws on negative parameter');
