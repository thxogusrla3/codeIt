$(window).on('scroll',scrollerHandler);
$('.to-top-btn').on('click', function(){
  $('html, body').animate({ scrollTop: 0}, 1000);
});

function scrollerHandler(){
  var windowBottom = $(window).scrollTop() + $(window).height();
  $('.playlist').each(function(){
    if(windowBottom >$(this).position().top + $(this).outerHeight() / 2){
      $(this).animate({'opacity':'1'}, 1500);
    }
  });
  if(windowBottom == $(document).height()) { $('.to-top-btn').fadeIn(); }
  else $('.to-top-btn').fadeOut();
  console.log(windowBottom + "  " + $(document).height());
}

scrollerHandler();
