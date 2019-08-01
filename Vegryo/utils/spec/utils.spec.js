const gardenDesign = require('../utils')
const { expect } = require('chai')

describe('gardenDesign', () => {
  it('returns an array with an object for one vegetable and its amount', () => {
    const actual = gardenDesign([{ Carrot: 10 }], 100, 100)
    expect(actual).to.eql([{ Carrot: 100 }])
  });
  it('returns an array with an object for two vegetables', () => {
    const actual = gardenDesign([{ Carrot: 10 }, { Asparagus: 43 }], 100, 100)
    expect(actual).to.eql([{ Carrot: 50 }, { Asparagus: 2 }])
  });
  it('returns an array with an object for two vegetables', () => {
    const actual = gardenDesign([{ Carrot: 10 }, { Asparagus: 10 }, { SpringOnion: 10 }], 100, 100)
    expect(actual).to.eql([{ Carrot: 33 }, { Asparagus: 33 }, { SpringOnion: 33 }])
  });
});