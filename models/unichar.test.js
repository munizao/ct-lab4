const Unichar = require('./unichar');

describe('Unichar model', () => {
  it('has a required name', () => {
    const unichar = new Unichar({});
    expect(unichar.validateSync().errors.name.message)
      .toEqual('Path `name` is required.');
  });
  it('does not have a code point less than 0', () => {
    const unichar = new Unichar({ name: 'A', codePoint: -1 });
    expect(unichar.validateSync().errors.codePoint.message)
      .toEqual('Path `codePoint` (-1) is less than minimum allowed value (0).');
  });
});
