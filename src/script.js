$(document).ready(function(){
  // Getting basic store info
  $.get( "menu.json", function( data ) {
    $( "body" )
      .append( "<p><strong>Shop Name: " + data[0].shopName + "</p></strong>") 
      .append( "Address: " + data[0].address ); 
  }, "json" );

  // Get product/price info & store in items
  $.getJSON( "menu", function( data ) {
    // instantiate coffee shop with this data
    console.log(data);
    myShop = new CoffeeShop(data[0]);
    i=0;
    var items = [];
    var products = [];

    $.each( data[0], function( key, val ) {
      items.push( "<li id='" + i + "'>" + key + ": " + val + "</li>" );
      products[key]=val;
      i++;
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });
});