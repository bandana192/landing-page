//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "31 july 2022 12:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	