function CoffeeShop (shopData) {
  // order = [{"coffee": 2}, 
  // {"tea": 1}, 
  // {"brownie": 1}]
  this.shopName = shopData.shopName;
  this.address = shopData.address;
  this.prices = shopData.prices[0];
  
  this.order = [];
  this.total=0;
  this.tax = 8.64;
};

CoffeeShop.prototype.hasItem = function(item) {
  return this.prices.hasOwnProperty(item);
};

CoffeeShop.prototype.addItem = function(item) {
  if (this.prices[item]) {
    this.order[item] ? this.order[item]++ : this.order[item]=1;
    return true;
  } else {
    // TODO: throw error
    return false;
  }
};

CoffeeShop.prototype.orderCount = function() {
  return Object.keys(this.order).length;
};

CoffeeShop.prototype.showOrder = function() {
  for (var key in this.order) {
      console.log(key+" "+this.order[key]+"\n");
  }
};

CoffeeShop.prototype._getTotalBeforeTax = function() {
  // this.order[item] returns item quantity
  // this.order[item] returns item price
  for (var item in this.order) {
    this.total += this.order[item] * this.prices[item];
  }
};

CoffeeShop.prototype.getTotalAfterTax = function(){
  this._getTotalBeforeTax(); 
  var tax = (8.64*this.total) / 100;
  totalAfterTax = this.total + tax;
  totalAfterTax = this._strip(totalAfterTax);
  return totalAfterTax;
}

CoffeeShop.prototype._strip = function (number) {
  return (parseFloat(number.toPrecision(2)));
}
