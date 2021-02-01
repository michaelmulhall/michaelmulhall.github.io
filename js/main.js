/**
 * ===================================================================
 * main js
 *
 * -------------------------------------------------------------------
 */

// Trigger CSS animations on scroll.
// Detailed explanation can be found at http://www.bram.us/2013/11/20/scroll-animations/

// Looking for a version that also reverses the animation when
// elements scroll below the fold again?
// --> Check https://codepen.io/bramus/pen/vKpjNP

jQuery(function($) {
  
	// Function which adds the 'animated' class to any '.animatable' in view
	var doAnimations = function() {
	  
	  // Calc current offset and get all animatables
	  var offset = $(window).scrollTop() + $(window).height(),
		  $animatables = $('.animatable');
	  
	  // Unbind scroll handler if we have no animatables
	  if ($animatables.length == 0) {
		$(window).off('scroll', doAnimations);
	  }
	  
	  // Check all animatables and animate them if necessary
		  $animatables.each(function(i) {
		 var $animatable = $(this);
			  if (($animatable.offset().top + $animatable.height() - 400) < offset) {
		  $animatable.removeClass('animatable').addClass('animated');
			  }
	  });
  
	  };
	
	// Hook doAnimations on scroll, and trigger a scroll
	  $(window).on('scroll', doAnimations);
	$(window).trigger('scroll');
  
  });

  var thehours = new Date().getHours();
	var themessage;
	var morning = ('Good morning! I\'m');
	var afternoon = ('Good afternoon! I\'m');
	var evening = ('Good evening! I\'m');

	if (thehours >= 0 && thehours < 12) {
		themessage = morning;

	} else if (thehours >= 12 && thehours < 17) {
		themessage = afternoon;

	} else if (thehours >= 17 && thehours < 24) {
		themessage = evening;
	}

	$('.greeting').append(themessage);

	(function($){
		$.fn.extend({
			rotaterator: function(options) {
	
				var defaults = {
					fadeSpeed: 500,
					pauseSpeed: 5000,
					child:null
				};
				
				var options = $.extend(defaults, options);
	
				return this.each(function() {
					  var o =options;
					  var obj = $(this);
					  var items = $(obj.children(), obj);
					  items.each(function() {$(this).hide();})
					  if(!o.child){var next = $(obj).children(':first');
					  }else{var next = o.child;
					  }
					  $(next).fadeIn(o.fadeSpeed, function() {
							$(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {
								var next = $(this).next();
								if (next.length == 0){
										next = $(obj).children(':first');
								}
								$(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
							})
						});
				});
			}
		});
	})(jQuery);
	
	 $(document).ready(function() {
			$('#rotate').rotaterator({fadeSpeed:500, pauseSpeed:5000});
	 });
	

