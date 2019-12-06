const Address = require('./address');

describe('Address model', () => {
  it('has a required street', () => {
    const address = new Address({});
    expect(address.validateSync().errors.zip.message)
      .toEqual('Path `street` is required.');
  });
  it('has a required city', () => {
    const address = new Address({});
    expect(address.validateSync().errors.zip.message)
      .toEqual('Path `city` is required.');
  });
  it('has a required state', () => {
    const address = new Address({});
    expect(address.validateSync().errors.zip.message)
      .toEqual('Path `state` is required.');
  });
  it('has a required zipcode', () => {
    const address = new Address({});
    expect(address.validateSync().errors.zip.message)
      .toEqual('Path `zip` is required.');
  });
});
