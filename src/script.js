// Creates the menu view with buttons for adding items to the order
$(document).ready(function(){

  $.getJSON( "menu.json", function( data ) {
    var myShop = new CoffeeShop(data[0]);
    $( "#resto-name" ).text(myShop.shopName);
    $( "#resto-address" ).text(myShop.address);
    
    var items = [];

    $.each( myShop.prices, function( key, val ) {
      items.push( "<li><button type='button' value='"+key+"'>" + key + ": " + val + "</button></li>" );
    });
   
    $( "<ul/>", {
      "class": "product-buttons",
      html: items.join( "" )
    }).appendTo( "body" );

    $(".product-buttons").find('button').click( function () {
      myShop.addItem($(this).val());
      myShop.showOrder();
    });
  });
});