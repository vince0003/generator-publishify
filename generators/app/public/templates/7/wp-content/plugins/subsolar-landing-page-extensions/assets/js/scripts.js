jQuery(document).ready(function($){

	"use strict";


	/**
	* ----------------------------------------------------------------------------------------
	*    Nav Menu Animate Scroll To
	* ----------------------------------------------------------------------------------------
	*/

	$('.main-navigation-menu a[href*="#"]:not([href="#"])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 750);
				return false;
			}
		}
	});

})
