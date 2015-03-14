$(document).ready(function(){
  // Getting basic store info
  $.get( "menu.json", function( data ) {
    $( "body" )
      .append( "<p><strong>Shop Name: " + data[0].shopName + "</p></strong>") 
      .append( "Address: " + data[0].address ); 
  }, "json" );

  // Get product/price info & store in items
  $.getJSON( "menu", function( data ) {
    i=0;
    var items = [];
    $.each( data[0], function( key, val ) {
      items.push( "<li id='" + i + "'>" + key + ": " + val + "</li>" );
      i++;
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });
});