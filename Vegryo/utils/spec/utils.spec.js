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
  })
  it('returns an array with an object for three vegetables', () => {
    const actual = gardenDesign([{ Carrot: 10 }, { Asparagus: 43 }, { SpringOnion: 2 }], 100, 100)
    expect(actual).to.eql([{ Carrot: 33 }, { Asparagus: 1 }, { SpringOnion: 833 }])
  });
  it('returns an array with an object for four vegetables', () => {
    const actual = gardenDesign([{ Carrot: 10 }, { Asparagus: 43 }, { SpringOnion: 2 }, { Cabbage: 45 }], 100, 100)
    expect(actual).to.eql([{ Carrot: 25 }, { Asparagus: 1 }, { SpringOnion: 625 }, { Cabbage: 1 }])
  });
  it('returns an array with an object for two vegetables in a rectangle space', () => {
    const actual = gardenDesign([{ Carrot: 10 }, { SpringOnion: 2 }], 100, 300)
    expect(actual).to.eql([{ Carrot: 150 }, { SpringOnion: 3750 }])
  });
})