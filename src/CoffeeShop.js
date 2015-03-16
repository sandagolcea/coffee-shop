function CoffeeShop (shopData) {
  this.shopName = shopData.shopName;
  this.address = shopData.address;
  this.prices = shopData.prices[0];
  
  this.order = []; //order = [{"coffee": 2}, {"brownie": 1}];
  this.total=0;
  this.taxPercentage = 8.64;
  this.tax=0;
};

CoffeeShop.prototype.hasItem = function(item) {
  return this.prices.hasOwnProperty(item);
};

CoffeeShop.prototype.addItem = function(item) {
  if (this.prices[item]) {
    this.order[item] ? this.order[item]++ : this.order[item]=1;
    return true;
  } else {
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
  total=0;
  for (var item in this.order) {
    total += this.order[item] * this.prices[item];
  }
  return total;
};

CoffeeShop.prototype.getTotalAfterTax = function(){
  this.total = this._getTotalBeforeTax(); 
  this.tax = parseFloat( ((8.64*this.total) / 100).toFixed(2) );
  return parseFloat((this.total + this.tax).toFixed(2));
}
