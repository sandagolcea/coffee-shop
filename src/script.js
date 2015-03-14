$(document).ready(function(){
  $.get( "menu.json", function( data ) {
    $( "body" )
      .append( "<p>Shop Name: " + data[0].shopName + "</p>") 
      .append( "Address: " + data[0].address ); 
  }, "json" );
});