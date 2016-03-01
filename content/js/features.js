

$(document).ready(function() {
	$("#places").click(function(event){
 var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
 $.getJSON( flickerAPI, {
   tags: "sunrise",
   tagmode: "any",
   format: "json"
 })
 
 .done(function( data ) {
   $.each( data.items, function( i, item ) {
     $( "<img/>" ).attr( "src", item.media.m ).appendTo( "#places" ); 
     if ( i === 3 ) {
       return false;
     }
   });
 });
	});
	$("#people").click(function(event){
 var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
 $.getJSON( flickerAPI, {
   tags: "people travel",
   tagmode: "any",
   format: "json"
 })
 .done(function( data ) {
   $.each( data.items, function( i, item ) {
     $( "<img/>" ).attr( "src", item.media.m ).appendTo( "#people" );
     if ( i === 3 ) {
       return false;
     }
   });
 });
		$('#people.img').click( function(){
			$("#people.img").remove();
		});
	});

})();
