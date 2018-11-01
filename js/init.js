(function($){
  $(function(){

//PRELOADER
//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});
//PRELOADER end


    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('ul.tabs').tabs();
    $('.slider').slider({full_width: true});
    $('.scrollspy').scrollSpy();
    $(".dropdown-button").dropdown();



  }); // end of document ready
})(jQuery); // end of jQuery name space

var toggleSearch = function(){
	$('.mobile-search-bar').toggleClass('hide');
	$('.mobile-search-bar label').toggleClass('active');
	$('#mobile-search').focus();
}

var openSearch = function(){
	$('.mobile-search-bar').addClass('hide');
	$('.mobile-search-bar label').addClass('active');
	$('#mobile-search').focus();
}

var closeSearch = function(){
	$('.mobile-search-bar').removeClass('hide');
	$('.mobile-search-bar label').removeClass('active');
}
