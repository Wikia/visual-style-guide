$(document).ready(function(){

	$(".nav > li > a").click( function() {
		var parent = $(this).parent(),
			dropdown = parent.children(".dropdown");
		if ( $(dropdown).length > 0 ) {
			dropdown.toggle();
		}
	});

});