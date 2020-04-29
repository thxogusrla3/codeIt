$(window).on('scroll', scrollHandler);

function scrollHandler(){ //화면에서 스크롤을 사용할 때 사용되는 함수.
  if($(window).scrollTop() >= $('.about').position().top){ //scrollTop이 position().top보다 크면 지나친거니까 .about이 보이게 설정함.
    // $('.skill').each(function(){
    //   var skill = $(this); //자신의 skill들을 저장.
    //   var percentages = skill.find('.percentage').text();
    //   skill.find('.inner-bar').animate({width:percentages}, 2200);
    // });
    $('.skill').each(function(){
      var skill = $(this);
      var percentage = skill.find('.percentage').text();
      skill.find('.inner-bar').animate({width:percentage}, 1500);
    });
    $('.menu-right button').css('color', '#4a4a4a');
  }else $('.menu-right button').css('color', 'white');

  $('section').each(function(){
    if($(window).scrollTop() >= $(this).position().top){
      $(this).find('.vertical-center').animate({top:'0', opacity:'1'}); //section 안에 있는 vertical-center
    }
  });
}


//$('html, body')로 설정은 모든 브라우저에서 사용할 수 있도록 설정함.
$('.menu-right button').on('click', function(){
  var id = $(this).attr('id');
  if( id == "about-btn"){
    $('html, body').animate({scrollTop:$('.about').position().top}, 1000);
    $('.vertical-center').css({'opcity':1, 'top':0});
    
  }
  else if(id == "contact-btn"){
    $('html, body').animate({scrollTop:$('.contact').position().top}, 1000);
  }
});






