'use-strict';

//LOCK NAV BAR WHEN SCROLLING
// const mainNav = $('.top-nav');
// const mainSlideshow = $('.title');
// $(window).scroll(function() {
//   if ( $(this).scrollTop() > 250 ) {
//     mainNav.addClass('fix-nav');
//     mainSlideshow.addClass('hidden');
//     // $('#about').addClass('scrolled');
//   }
//   else {
//     mainNav.removeClass('fix-nav');
//     mainSlideshow.removeClass('hidden');
//     // $('#about').removeClass('scrolled');
//   }
// });

$(function() {

  $('a[href="#about"]').click(function() {
      console.log("about has been clicked");
      // $('#about').addClass('scrolled');
      $('a[href="#about"]').addClass("active");
      $('a[href="#webDev"], a[href="#skills"], a[href="#contact"]').removeClass('active');
  });
  $('a[href="#webDev"]').click(function() {
      console.log("webdev has been clicked");
      // $('#webDev').addClass('scrolled-less');
      $('a[href="#webDev"]').addClass("active");
      $('a[href="#about"], a[href="#skills"], a[href="#contact"]').removeClass('active');
  });
  $('a[href="#skills"]').click(function() {
    console.log("skills has been clicked");
    // $('#skills').addClass('scrolled-less');
    $('a[href="#skills"]').addClass("active");
      $('a[href="#webDev"], a[href="#contact"], a[href="#about"]').removeClass('active');
  });
  $('a[href="#contact"]').click(function() {
    console.log("contact has been clicked");
    // $('#contact').addClass('scrolled-less');
    $('a[href="#contact"]').addClass("active");
    $('a[href="#webDev"], a[href="#skills"], a[href="#about"]').removeClass('active');
  });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
  
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      var hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 600, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } 
  });

  
  window.onscroll = function() {myFunction()};

  function myFunction() {
    
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      document.getElementById("my-contact-info").className = "show-flex other";
    } else {
      document.getElementById("my-contact-info").className = "hidden";
    }
  }
  


});
  
