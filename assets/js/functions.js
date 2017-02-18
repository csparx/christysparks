$(function() {
  //mentoringBubbleClick();
  //setInterval(function(){articleTada()}, 4000);
  //designBGStuff();
  //smoothScroll(300);
  mobileNav();
});

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}
