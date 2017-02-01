$(document).ready(function(){

	var owl = $('.owl-carousel');
	owl.owlCarousel({  	
	  	items: 1,
	  	mouseDrag: false,
	  	margin: 0,
	  	center: true, 
	  	smartSpeed: 1000
	});

	$('.customNextBtn').click(function() {
	    owl.trigger('next.owl.carousel');
	});
});
