'use-strict';

//LOCK NAV BAR WHEN SCROLLING
const mainNav = $('.top-nav');
const mainSlideshow = $('.title');
$(window).scroll(function() {
  if ( $(this).scrollTop() > 250 ) {
    mainNav.addClass('fix-nav');
    mainSlideshow.addClass('hidden');
    // $('#about').addClass('scrolled');
  }
  else {
    mainNav.removeClass('fix-nav');
    mainSlideshow.removeClass('hidden');
    // $('#about').removeClass('scrolled');
  }
});

$(function() {

  $('a[href="#about"]').click(function() {
      console.log("about has been clicked");
      // $('#about').addClass('scrolled');
      $('a[href="#about"]').addClass("active");
      $('a[href="#webDev"]').removeClass('active');
      $('a[href="#skills"]').removeClass('active');
      $('a[href="#contact"]').removeClass('active');
  });
  $('a[href="#webDev"]').click(function() {
      console.log("webdev has been clicked");
      // $('#webDev').addClass('scrolled-less');
      $('a[href="#webDev"]').addClass("active");
      $('a[href="#about"]').removeClass('active');
      $('a[href="#skills"]').removeClass('active');
      $('a[href="#contact"]').removeClass('active');
  });
  $('a[href="#skills"]').click(function() {
    console.log("skills has been clicked");
    // $('#skills').addClass('scrolled-less');
    $('a[href="#skills"]').addClass("active");
      $('a[href="#webDev"]').removeClass('active');
      $('a[href="#contact"]').removeClass('active');
      $('a[href="#about"]').removeClass('active');
  });
  $('a[href="#contact"]').click(function() {
    console.log("contact has been clicked");
    // $('#contact').addClass('scrolled-less');
    $('a[href="#contact"]').addClass("active");
    $('a[href="#webDev"]').removeClass('active');
    $('a[href="#skills"]').removeClass('active');
    $('a[href="#about"]').removeClass('active');
  });
})