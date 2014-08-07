$(document).ready(function(){

	$(".nav > li > a").click( function() {
		var parent   = $(this).parent(),
		    dropdown = parent.find(".dropdown");

		dropdown.toggle();
	});

});