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
      .toEqual('Cast to Array failed for value "[ -1, 0 ]" at path "scores"');
  });

});