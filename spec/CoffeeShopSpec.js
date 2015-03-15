describe('Waiter', function () {
  var coffeeShop;

  beforeEach(function(){
    var menu = {
        "Cafe Latte": 4.75,
        "Flat White": 4.75,
        "Cappucino": 3.85,
        "Single Espresso": 2.05,
        "Double Espresso": 3.75,
        "Americano": 3.75,
        "Cortado": 4.55,
        "Tea": 3.65,
        "Choc Mudcake": 6.40,
        "Choc Mousse": 8.20,
        "Affogato": 14.80,
        "Tiramisu": 11.40,
        "Blueberry Muffin": 4.05,
        "Chocolate Chip Muffin": 4.05,
        "Muffin Of The Day": 4.55
      };
    coffeeShop = new CoffeeShop(menu);
  });

  describe('has a menu', function () {
    
    it('with tea', function () {
      expect(coffeeShop.hasItem("Tea")).toBe(true);
    });

    it('without brownies', function () {
      expect(coffeeShop.hasItem("Brownie")).toBe(false);
    });

  });

  describe('when taking an order', function () {

    it('can add items to the order', function () {
      coffeeShop.addItem("Tea");
      coffeeShop.addItem("Cortado");
      expect(coffeeShop.orderCount()).toBe(2);
    });

    it('cannot add items that are not on the menu to the order', function () {
      coffeeShop.addItem("Tea");
      coffeeShop.addItem("Tea");
      coffeeShop.addItem("Brownie");
      expect(coffeeShop.orderCount()).toBe(1);
    });

    it('can calculate the total of the order', function () {
      coffeeShop.addItem("Tea");
      coffeeShop.addItem("Tiramisu");
      coffeeShop.addItem("Tiramisu");
      coffeeShop.getTotal();
      coffeeShop.getTotalAfterTax();
      coffeeShop.showOrder();
      expect(coffeeShop.total).toEqual(26.45);
    });

  });
});