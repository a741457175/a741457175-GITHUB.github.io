$(document).ready(function() {
	// Header Scroll
    var jq = jQuery.noConflict();
	jq(window).on('scroll', function() {
		var scroll = jq(window).scrollTop();

		if (scroll >= 50) {
			jq('#header').addClass('fixed');
		} else {
			jq('#header').removeClass('fixed');
		}
	});


	// Page Scroll
	var sections = jq('section')
		nav = jq('nav[role="navigation"]');

	jq(window).on('scroll', function () {
	  	var cur_pos = jq(this).scrollTop();
	  	sections.each(function() {
	    	var top = jq(this).offset().top - 76
	        	bottom = top + jq(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+jq(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var el = jq(this)
	    	id = el.attr('href');
		jq('html, body').animate({
			scrollTop: jq(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	jq('.nav-toggle').on('click', function() {
		jq(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		jq('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
	// toggle
	var lip = jq('.ul1 li p')
	jq('.ul1 li h6').mouseover(function () {
        jq(this).next().css({'visibility':'visible'})
    })
    jq('.ul1 li h6').mouseout(function () {
        jq(this).next().css({'visibility':'hidden'})
    })

});