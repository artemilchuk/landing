//= require_tree .
//= require 'vendor/retina'



// smooth scrolling

smoothScrolling = function() {
  $('a[href*=#]:not([href=#])').click(function() {
    var target;
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('body,html').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
};



// highlighting the same links on hover

linksHover = function() {
  $(document).on('mouseover mouseout', "a", function(e) {
      var href = $(this).attr('href');
        if (!href || href == '#') {
          return;
        }
      $("a")
        .filter('[href="' + $(this).attr('href') + '"]')
        .toggleClass("hover", e.type == 'mouseover');
    });
};





// ready

ready = function() {
  // smoothScrolling();
  // linksHover();
};


$(document).ready(function() {
  return ready();
});

$(document).on('load', ready);