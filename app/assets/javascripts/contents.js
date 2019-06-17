$(function() {
  $(".modal-registe,.modal-registe-side").click(function(){
    $(".denmoku").fadeIn();
  });
  $(".close-modal").click(function(){
    $(".denmoku").fadeOut();
  });

  $(".index__image__sentence,.index__image__sentence-side").click(function(){
    $(".denmoku2").fadeIn();
  });
  $(".close-modal").click(function(){
    $(".denmoku2").fadeOut();
  });

  $(".new-modal,.new-modal-side").click(function(){
    $(".signup").fadeIn();
  });
  $(".close-modal").click(function(){
    $(".signup").fadeOut();
  });

  $(".rogin-madal,.rogin-madal-side").click(function(){
    $(".login").fadeIn();
  });
  $(".close-modal").click(function(){
    $(".login").fadeOut();
  });

  $(window).scroll(function(){
    if($(this).scrollTop()>20){
      $('.topbtn').fadeIn();
      $('.sidebar').fadeIn();
      $('.sidebar2').fadeIn();
      $('.index__center__index__contents,.index__center__index__contents__inner').css({
        width:'87%'
      });
    }else{
      $('.topbtn').fadeOut();
      $('.sidebar').fadeOut();
      $('.sidebar2').fadeOut();
      $('.index__center__index__contents,.index__center__index__contents__inner').css({
        width:'96%'
      });
    }
  });
  $(".topbtn").click(function(){
    $('html,body').animate({scrollTop:0},500);
  });

  $('.slide-modal').click(function(){
      var $Slide = $('.active');
      $Slide.removeClass('active');
      if ($(this).hasClass('next-btn')) {
        $Slide.next().addClass('active');
      } else {
        $Slide.prev().addClass('active');
      }
    var slideIndex = $('.slide').index($('.active'));
    $('.slide-modal').show();
    if (slideIndex==0) {
      $('.prev-btn').hide();
    } else if (slideIndex==2) {
      $('.next-btn').hide();
    }
  });

  var flag = "up";
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 0) {
      if (flag === "up") {
        $(".scroll-header").stop().animate({
          top: 0
        }, 500)
        flag = "down";
      }
    } else {
      if (flag === "down") {
        $(".scroll-header").stop().animate({
          top: "-70px"
        }, 500);
        flag = "up";
      }
    }
  });
});
