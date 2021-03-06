$(function() {
  "use strict";



  // //------- Sticky Header -------//
  // $(".sticky-header").sticky();

  // //------- video popup -------//
  // $(".hero-banner__video, .video-play-button").magnificPopup({
  //   disableOn: 700,
  //   type: "iframe",
  //   mainClass: "mfp-fade",
  //   removalDelay: 160,
  //   preloader: false,
  //   fixedContentPos: false
  // });

  // //------- mailchimp --------//  
	// function mailChimp() {
	// 	$('#mc_embed_signup').find('form').ajaxChimp();
  // }
  // mailChimp();

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();


	//* Quick Navigation Parameters
  var fast_nav_offset_top = $('header').height() + 140; 
	//* Quick Navigation Moves with the screen
    function fast_navFixed(){
        if ( $('.fast_nav').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= fast_nav_offset_top ) {
                    $(".fast_nav").addClass("fast_nav-fixed");
                    $(".fast_nav").removeClass("fast_nav-bottom");
                } else {
                    $(".fast_nav").removeClass("fast_nav-fixed");
                }
            });
        };
    };
    fast_navFixed();
	
	
  var fast_nav_offset_bottom = $(document).height() - 1300; 
	// Quick Navigation Bottom
    function fast_navBottom(){
        if ( $('.fast_nav').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= fast_nav_offset_bottom ) {
                    $(".fast_nav").addClass("fast_nav-bottom");
                    $(".fast_nav").removeClass("fast_nav-fixed");
                } else {
                    $(".fast_nav").removeClass("fast_nav-bottom");
                }
            });
        };
    };
    fast_navBottom();



// Thematic Inquiry
	//* Thematic Inquiry Parameters
  var makcy_nav_offset_top = $('header').height() + 200;
	//* Thematic exploration moves with the screen
    function makcy_navFixed(){
        if ( $('.makcy_nav').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= makcy_nav_offset_top ) {
                    $(".makcy_nav").addClass("fast_nav-fixed");
                    $(".makcy_nav").removeClass("fast_nav-bottom");
                } else {
                    $(".makcy_nav").removeClass("fast_nav-fixed");
                }
            });
        };
    };
    makcy_navFixed();
	
	
  var makcy_nav_offset_bottom = $(document).height() - 1600; 
	// Thematic Inquiry bottom
    function makcy_navBottom(){
        if ( $('.makcy_nav').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= makcy_nav_offset_bottom ) {
                    $(".makcy_nav").addClass("fast_nav-bottom");
                    $(".makcy_nav").removeClass("fast_nav-fixed");
                } else {
                    $(".makcy_nav").removeClass("fast_nav-bottom");
                }
            });
        };
    };
    makcy_navBottom();
	
	

  if ($('.blog-slider').length) {
    $('.blog-slider').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: true,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        navText : ["<div class='blog-slider__leftArrow'><img src='img/home/left-arrow.png'></div>","<div class='blog-slider__rightArrow'><img src='img/home/right-arrow.png'></div>"],
        responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    })
  }

  //------- mailchimp --------//  
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();
  
});


