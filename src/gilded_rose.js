class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      this.itemShouldMeetCriteria(i);

      if (!this.items[i].name.match(/Aged Brie/gi) && !this.items[i].name.match(/Backstage passes/gi)) {
        this.decreaseItemQuality(i);
      } else {
        this.increasesItemQuality(i);
      }

      this.sellInDaysDecrease(i);

      if (this.items[i].sellIn < 0) {
        this.sellInPassedUpdateQuality(i);
      }

    }

    return this.items;
  }

  itemShouldMeetCriteria(i) {
    if(this.items[i].quality < 0) this.items[i].quality = 0;

    if(this.items[i].quality > 50 && !this.items[i].name.match(/Sulfuras/gi)) {
      this.items[i].quality = 50;
    }
  }

  sellInDaysDecrease(i) {
    if (!this.items[i].name.match(/Sulfuras/gi)) {
      this.items[i].sellIn = this.items[i].sellIn - 1;
    }
  }

  decreaseItemQuality(i) {
    if (this.items[i].quality > 0 && !this.items[i].name.match(/Sulfuras/gi)) {
      this.items[i].quality = this.items[i].quality - 1;
    }
    if (this.items[i].quality > 0 && this.items[i].name.match(/Conjured/gi)) {
      this.items[i].quality = this.items[i].quality - 1;
    }
  }

  increasesItemQuality(i) {
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
      if (this.items[i].name.match(/Backstage passes/gi)) {
        if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
        if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
      }
    }
  }

  sellInPassedUpdateQuality(i) {

    if (this.items[i].name.match(/Aged brie/gi)) {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1;
      }
      return;
    }

    if (this.items[i].name.match(/Backstage passes/gi)) {
      this.items[i].quality = 0;
      return;
    }

    if (!this.items[i].name.match(/Sulfuras/gi)) {
      if (this.items[i].quality > 0) {
        this.items[i].quality = this.items[i].quality - 1;
        if(this.items[i].quality > 0) {
          this.items[i].quality = this.items[i].quality - 1;
        }
      }
    }

  }

}

module.exports = {
  Item,
  Shop
}
