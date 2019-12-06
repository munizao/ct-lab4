const MP3 = require('./mp3');

describe('MP3 model', () => {
  it('has required title', () => {
    const mp3 = new MP3({});
    expect(mp3.validateSync().errors.title.message)
      .toEqual('Path `title` is required.');
  });
  it('has required performer', () => {
    const mp3 = new MP3({});
    expect(mp3.validateSync().errors.performer.message)
      .toEqual('Path `performer` is required.');
  });
  it('has a track number that is not too small', () => {
    const mp3 = new MP3({ track: -1 });
    expect(mp3.validateSync().errors.track.message)
      .toEqual('Path `track` (-1) is less than minimum allowed value (1).');
  });
  it('has a track number that is not too large', () => {
    const mp3 = new MP3({ track: 1000 });
    expect(mp3.validateSync().errors.track.message)
      .toEqual('Path `track` (1000) is more than maximum allowed value (99).');
  });
});
