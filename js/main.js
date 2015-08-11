// Main JS File Unminified 
$(function(){

	// Mobile Nav
	$('.mobile-toggle').click(function(event) {
	    event.preventDefault();
		$('.nav').toggleClass('nav-open');
	});

    // Scroll to Contact
    $('[rel="view-contact"]').click(function() {
        event.preventDefault();
		scrollToAnchor('contact');
    });
    
	function scrollToAnchor(aid){
	    var aTag = $('#'+ aid +'');
	    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}

});