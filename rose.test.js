const {Item} = require("./rose");
const {Shop} = require("./rose");

describe('gilded rose', () => {

    const cases = [
        ['ricky', 1, 1],
        ['Aged Brie', 1, 51],
        ['Aged Brie', 1, 1],
        ['Backstage passes to a TAFKAL80ETC concert', 12, 1],
        ['Backstage passes to a TAFKAL80ETC concert', 12, 50],
        ['Backstage passes to a TAFKAL80ETC concert', 10, 49],
        ['Backstage passes to a TAFKAL80ETC concert', 1, 1],
        ['Backstage passes to a TAFKAL80ETC concert', 1, 48],
        ['Chris', -1, 48],
        ['Sulfuras, Hand of Ragnaros', -1, 48],
        ['Aged Brie', -1, 51],
        ['Sulfuras, Hand of Ragnaros', 1, 1],
        ['Chris', 1, -1],
        ['Chris', -1, -1],
        ['Christ', -1, 1],
        ['Christopher', -1, 10],
        ['Backstage passes to a TAFKAL80ETC concert', -1, 10],
        ['Aged Brie', -1, 10],

        ['Backstage passes to a TAFKAL80ETC concert', 11, 48],
    ]

    test.each(cases)('gilded rose "name: %s sellin: %s quality: %s"', (name, sellIn, quality) => {
        expect(new Shop([new Item(name, sellIn, quality)]).updateQuality()).toMatchSnapshot()
    })

})
