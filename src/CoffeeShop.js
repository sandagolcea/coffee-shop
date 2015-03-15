function CoffeeShop (menu) {
  // order = [{"coffee": 2}, 
  // {"tea": 1}, 
  // {"brownie": 1}]
  this.order = [];
  this.menu = menu;
  this.total=0;
  this.tax = 8.64;
};

CoffeeShop.prototype.hasItem = function(item) {
  if (this.menu[item]) 
    return true;
  else
    return false;
};

CoffeeShop.prototype.addItem = function(item) {
  if (this.menu[item]) {
    this.order[item] ? this.order[item]+=1 : this.order[item]=1;
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

CoffeeShop.prototype.getTotal = function() {
  // this.order[key] returns item quantity
  // this.order[key] returns item price
  for (var key in this.order) {
    this.total += this.order[key] * this.menu[key];
  }
};

CoffeeShop.prototype.getTotalAfterTax = function(){
  var tax = (8.64*this.total) / 100;
  tax = this._strip(tax);
  console.log("Total=" + this.total);
  console.log("With Tax=" + (this.total - tax));
}

CoffeeShop.prototype._strip = function (number) {
  return (parseFloat(number.toPrecision(2)));
}
