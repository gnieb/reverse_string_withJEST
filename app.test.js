const reverse_string = require('./app')

test('reverses hello to be olleh', () => {
    expect(reverse_string('hello')).toBe('olleh');
  });

  