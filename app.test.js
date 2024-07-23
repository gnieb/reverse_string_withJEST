const reverse_string = require('./app')

test('reverses hello to be olleh', () => {
    expect(reverse_string('hello')).toBe('olleh');
  });

test('reverses GRACE to be ECARG', () => {
    expect(reverse_string('GRACE')).toBe('ECARG');
});

test('reverses HELLO THERE to be EREHT OLLEH', () => {
    expect(reverse_string('HELLO THERE')).toBe('EREHT OLLEH');
});




