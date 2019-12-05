const Address = require('./address');

describe('Address model', () => {
  it('has a required zipcode', () => {
    const address = new Address({});
    expect(address.validateSync().errors.zip.message)
      .toEqual('Path `zip` is required.');
  });
});
