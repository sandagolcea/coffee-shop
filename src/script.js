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
    }).appendTo( ".left" );

    $(".product-buttons").find('button').click( function () {
      myShop.addItem($(this).val());
      myShop.showOrder();

      var list = "<ul class='receipt-items'>";
      for (var item in myShop.order) {
        list +="<li value="+item+">"+myShop.order[item]+" X "+item+" - "+myShop.prices[item]+"</li>";
      }
      list +="</ul>";
      
      console.log(list);
      $( ".receipt-items" ).replaceWith(list);
      var total = myShop.getTotalAfterTax();
      $("#receipt-total").replaceWith("<pre id='receipt-total'>Tax: "+myShop.tax+"\nTotal: "+total+"</pre>");
    });

  });
});