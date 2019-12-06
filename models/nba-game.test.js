const NBAGame = require('./nba-game');

describe('nbaGame model', () => {
  it('has a tipoff as required', () => {
    const nbaGame = new NBAGame({ score: [0, 0] });
    expect(nbaGame.validateSync().errors.tipoff.message)
      .toEqual('Path `tipoff` is required.');
  });

  it('does not have a negative score', () => {
    const nbaGame = new NBAGame({ tipoff: Date.now(), scores: [-1, 0] });
    expect(nbaGame.validateSync().errors.scores.message)
      .toEqual('There must be no negative scores.');
  });

  it('does not have too many scores', () => {
    const nbaGame = new NBAGame({ tipoff: Date.now(), scores: [10, 20, 30] });
    expect(nbaGame.validateSync().errors.scores.message)
      .toEqual('There must be exactly two scores.');
  });

  it('does not have too few scores', () => {
    const nbaGame = new NBAGame({ tipoff: Date.now(), scores: [10] });
    expect(nbaGame.validateSync().errors.scores.message)
      .toEqual('There must be exactly two scores.');
  });

  it('does not have non-integer scores', () => {
    const nbaGame = new NBAGame({ tipoff: Date.now(), scores: [1.5, 10] });
    expect(nbaGame.validateSync().errors.scores.message)
      .toEqual('Scores must be integers.');
  });

  it('defaults to [0, 0] for score', () => {
    const nbaGame = new NBAGame({ tipoff: Date.now() });
    expect(Array.from(nbaGame.scores)).toEqual([0, 0]);
  });

});
