$(document).ready(function(){

	$(".nav > li > a").click( function() {
		var parent   = $(this).parent(),
		    dropdown = parent.find(".dropdown");
		if ( $(dropdown).length > 0 ) {
			dropdown.toggle();
		}
	});

});