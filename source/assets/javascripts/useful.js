smoothScrolling = function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    var target;
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
};



hideBrokenImgs = function() {
  return $('img').error(function() {
    return $(this).hide();
  });
};



linksHover = function() {
  $(document).on('mouseover mouseout', 'a', function(e) {
    var href;
    href = $(this).attr('href');
    if (!href || href === '#') {
      return;
    }
    $('a').filter('[href="' + $(this).attr('href') + '"]').toggleClass('hover', e.type === 'mouseover');
  });
};