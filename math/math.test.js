//import functions
const { add, sub, mult, div, sqrtRoot, max } = require('./math');
describe('Testing Math Module', () => {
  test('Should add varables', () => {
    expect(add(3, 2)).toBe(5);
  });

  test('Should subtract num', () => {
    expect(sub(3, 2)).toBe(1);
  });

  test('Should multiply num', () => {
    expect(mult(3, 2)).toBe(6);
  });

  test('Should divide two num', () => {
    expect(div(10, 2)).toBe(5);
  });

  test('Should give square root two num', () => {
    expect(sqrtRoot(49)).toBe(7);
  });

  test('Should return the max of two num', () => {
    expect(max(3, 2)).toBe(3);
  });
});
