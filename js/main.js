(function($) {
    'use strict';
	
	jQuery(document).ready(function(){
		
		/* START MENU JS */
			// Smooth scrolling for internal links
			$('.navbar-nav a[href^="#"], .navbar-brand[href^="#"]').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault(); // Prevent default anchor click behavior
			});		
			
			$(window).on('scroll',function(){
		    if($(this).scrollTop() > 200){
		    	$('.main_header').addClass('sticky_menu');
			}
			else{
			   $('.main_header').removeClass('sticky_menu');
			}
			});
			$(document).on('click', '.navbar-collapse.in', function (e) {
				if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
					$(this).collapse('hide');
				}
			});
		/* END MENU JS */
		
		/* START ISOTOP JS */
			var $grid = $('.work_content_area').isotope({
			  // options
			});
			// filter items on button click
			$('.work_filter').on( 'click', 'li', function() {
			  var filterValue = $(this).attr('data-filter');
			  $grid.isotope({ filter: filterValue });
			});
			// filter items on button click
			$('.work_filter').on( 'click', 'li', function() {
				$(this).addClass('active').siblings().removeClass('active')
			});
		/* END ISOTOP JS */
		
		/* START LIGHTBOX */
		
			lightbox.option({
			  'resizeDuration': 200,
			  'wrapAround': true
			});
		
		/* END LIGHTBOX JS */
		
		/* START COUNDOWN JS */
			$('#counter_area').on('inview', function(event, visible, visiblePartX, visiblePartY) {
				if (visible) {
					$(this).find('.counter').each(function () {
						var $this = $(this);
						$({ Counter: 0 }).animate({ Counter: $this.text() }, {
							duration: 5000,
							easing: 'swing',
							step: function () {
								$this.text(Math.ceil(this.Counter));
							}
						});
					});
					$(this).unbind('inview');
				}
			});
		/* END COUNDOWN JS */
		
		/* START VIDEO MODAL */
		$(document).ready(function() {
			var $videoSrc;
			$('.video-btn').click(function() {
				$videoSrc = $(this).data( "src" );
			});

			$('#videoModal').on('shown.bs.modal', function (e) {
				$("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0"); 
			})

			$('#videoModal').on('hide.bs.modal', function (e) {
				$("#video").attr('src',''); 
			}) 
		});
		/* END VIDEO MODAL */
	});	
	
		/*PRELOADER JS*/
			$(window).on('load', function() {  
				$('.spinner').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/
		
		// Wow
			new WOW().init();


	$('.navbar-nav a').click(function(){
        $('.navbar-collapse').removeClass('show in');
    })

})(jQuery);