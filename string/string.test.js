const { uppercase, lowercase } = require('./string');
describe('Testing String Module', () => {
  test('Should uppercase a string input', () => {
    // const result = uppercase('bob');
    // expect(result).toBe('BOB');

    expect(uppercase('bob')).toBe('BOB');
  });

  test('shoule lowercase a string input', () => {
    expect(lowercase('FULL SAIL')).toBe('full sail');
  });
});
