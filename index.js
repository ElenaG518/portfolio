'use-strict';

//LOCK NAV BAR WHEN SCROLLING
const mainNav = $('.top-nav');
const mainSlideshow = $('.title');
$(window).scroll(function() {
  if ( $(this).scrollTop() > 250 ) {
    mainNav.addClass('fix-nav');
    mainSlideshow.addClass('hidden');
    $('#about').addClass('scrolled');
  }
  else {
    mainNav.removeClass('fix-nav');
    mainSlideshow.removeClass('hidden');
    $('#about').removeClass('scrolled');
  }
});


$("#about").click(event => {
    console.log("about has been clicked");
});