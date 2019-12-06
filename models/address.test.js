const Address = require('./address');

describe('Address model', () => {
  it('has a required street', () => {
    const address = new Address({});
    expect(address.validateSync().errors.street.message)
      .toEqual('Path `street` is required.');
  });
  it('has a required city', () => {
    const address = new Address({});
    expect(address.validateSync().errors.city.message)
      .toEqual('Path `city` is required.');
  });
  it('has a required state', () => {
    const address = new Address({});
    expect(address.validateSync().errors.state.message)
      .toEqual('Path `state` is required.');
  });
  it('has a state that is not too long', () => {
    const address = new Address({ state: 'ORE' });
    expect(address.validateSync().errors.state.message)
      .toEqual('Path `state` (`ORE`) is longer than the maximum allowed length (2).');
  });
  it('has a state that is not too short', () => {
    const address = new Address({ state: 'O' });
    expect(address.validateSync().errors.state.message)
      .toEqual('Path `state` (`O`) is shorter than the minimum allowed length (2).');
  });
  it('has a required zipcode', () => {
    const address = new Address({});
    expect(address.validateSync().errors.zip.message)
      .toEqual('Path `zip` is required.');
  });
  it('has a zipcode that matches the regex', () => {
    const address = new Address({ zip: '9720w' });
    expect(address.validateSync().errors.zip.message)
      .toEqual('Path `zip` is invalid (9720w).');
  });
});
