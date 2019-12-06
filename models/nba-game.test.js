const NBAGame = require('./nba-game');

describe('nbaGame model', () => {
  it('does not have a negative score', () => {
    nbaGame = NBAGame({ score: [-1, 0] });
    expect(nbaGame.validateSync().errors.scores.message)
    .toEqual('');
  });

});