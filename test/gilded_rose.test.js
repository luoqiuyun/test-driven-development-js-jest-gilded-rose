jest.dontMock("./texttest_fixture");
var gildedRose = require("./texttest_fixture");

describe("Gilded Rose", function() {

  it("should Item 1 +5 Dexterity Vest, 10, 20", function() {
    expect(gildedRose[0].name).toBe("+5 Dexterity Vest");
    expect(gildedRose[0].sellIn).toEqual(9);
    expect(gildedRose[0].quality).toEqual(19);
  });

  it("should Item 2 Aged Brie, 2, 0", function() {
    expect(gildedRose[1].name).toBe("Aged Brie");
    expect(gildedRose[1].sellIn).toEqual(1);
    expect(gildedRose[1].quality).toEqual(1);
  });

  it("should Item 3 Elixir of the Mongoose, 5, 7", function() {
    expect(gildedRose[2].name).toBe("Elixir of the Mongoose");
    expect(gildedRose[2].sellIn).toEqual(4);
    expect(gildedRose[2].quality).toEqual(6);
  });

  it("should Item 4 Sulfuras, Hand of Ragnaros, 0, 80", function() {
    expect(gildedRose[3].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(gildedRose[3].sellIn).toEqual(0);
    expect(gildedRose[3].quality).toEqual(80);
  });

  it("should Item 5 Sulfuras, Hand of Ragnaros, -1, 80", function() {
    expect(gildedRose[4].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(gildedRose[4].sellIn).toEqual(-1);
    expect(gildedRose[4].quality).toEqual(80);
  });

  it("should Item 6 Backstage passes to a TAFKAL80ETC concert, 15, 20", function() {
    expect(gildedRose[5].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(gildedRose[5].sellIn).toEqual(14);
    expect(gildedRose[5].quality).toEqual(21);
  });

  it("should Item 7 Backstage passes to a TAFKAL80ETC concert, 10, 49", function() {
    expect(gildedRose[6].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(gildedRose[6].sellIn).toEqual(9);
    expect(gildedRose[6].quality).toEqual(50);
  });

  it("should Item 7 Backstage passes to a TAFKAL80ETC concert, 5, 49", function() {
    expect(gildedRose[7].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(gildedRose[7].sellIn).toEqual(4);
    expect(gildedRose[7].quality).toEqual(50);
  });

  it("should Item 8 Conjured Mana Cake, 3, 6", function() {
    expect(gildedRose[8].name).toBe("Conjured Mana Cake");
    expect(gildedRose[8].sellIn).toEqual(2);
    expect(gildedRose[8].quality).toEqual(4);
  });

  it("should Item 9 foo, 0, 0", function() {
    expect(gildedRose[9].name).toBe("foo");
    expect(gildedRose[9].sellIn).toEqual(-1);
    expect(gildedRose[9].quality).toEqual(0);
  });

});
