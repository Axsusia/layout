(function($) {
	//$("html").niceScroll();
	
	// Check if the section has the parallax class.
	if ($('section').hasClass('parallax')) {
		$('section.parallax').data('type', 'background');
		$('section.parallax').data('speed', '5');
	}

	$(document).ready( function() {
		// Cache the Window object
		$window = $(window);

		// $('section[data-type="background"]').each(function() {
		$('section.parallax').each(function() {
			// assigning the object
			var $bgobj = $(this);
			// console.log($bgobj);
			// console.log($bgobj.offsetHeight);
			$(window).scroll(function() {
				// Scroll the background at var speed
				// the yPos is a negative value because we're scrolling it UP!
				var yPos = -(($(window).scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));
				//var yPos = (50- ($(window).scrollTop()/$bgobj.offset().top *50 / $bgobj.data('speed')));
				//console.log(($(window).scrollTop() + ' / ' + $bgobj.offset().top) + ' / ' + $bgobj.data('speed') + ' / ' + yPos);
				// Put together our final background position
				var coords = '50% ' + yPos + '%';
				//console.log(50- ($(window).scrollTop()/$bgobj.offset().top *50));
				// Move the background
				$bgobj.css({ backgroundPosition: coords });
			});
			// window scroll Ends
		});
	});
})(jQuery);