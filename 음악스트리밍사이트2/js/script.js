$(window).on('scroll',scrollerHandler);
$('.to-top-btn').on('click', function(){
  $('html, body').animate({ scrollTop: 0}, 1000);
});

function scrollerHandler(){

  var windowBottom = $(window).scrollTop() + $(window).height(); //스크롤 할때마다 $(window).scrollTop()의 값이 변함.
  $('.playlist').each(function(){ //playlist 클래스인 것들을 모두 꺼냄.
    if(windowBottom >$(this).position().top + $(this).outerHeight() / 2){
      //$(this).position().top은 해당 요소의 첫 window 줄부터 요소의 가장 윗 부분까지.
      //$(this).outerHeight()는 해당 요소의 세로줄
      $(this).animate({'opacity':'1'}, 1500); //1.5초가 거림.
    }
  });
  if(windowBottom == $(document).height()) { $('.to-top-btn').fadeIn(); }
  else $('.to-top-btn').fadeOut();
  console.log(windowBottom + "  " + $(document).height());
}

scrollerHandler();
