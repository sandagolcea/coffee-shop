describe('CoffeeShop', function () {
  var coffeeShop;

  beforeEach(function(){
    coffeeShop = new CoffeeShop();
  });

  describe('has a menu', function () {
    it('with coffee', function () {
      expect(coffeeShop.hasItems()).toBe(true);
    });
  });
});