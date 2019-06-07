$(function() {
  $(".modal-registe").click(function(){
    $(".denmoku").fadeIn();
  });
  $(".close-modal").click(function(){
    $(".denmoku").fadeOut();
  });
});

$(function() {
  $(".new-modal").click(function(){
    $(".signup").fadeIn();
  });
  $(".close-modal").click(function(){
    $(".signup").fadeOut();
  });
});

$(function() {
  $(".rogin-madal").click(function(){
    $(".login").fadeIn();
  });
  $(".close-modal").click(function(){
    $(".login").fadeOut();
  });
});

$(function() {
  $(".index__image__sentence").click(function(){
    $(".denmoku").fadeIn();
  });
  $(".close-modal").click(function(){
    $(".denmoku").fadeOut();
  });
});

$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>20){
      $('.topbtn').fadeIn();
    }else{
      $('.topbtn').fadeOut();
    }
    
  });
  $(".topbtn").click(function(){
    $('html,body').animate({scrollTop:0},500);
  });
});


// $(function(){
//   function buildHTML(song){
//     var html = 
//     // - @songs.each do |song|
//     <div class="index__center__index__contents__inner">
//           ${songs.each do |song|}
//       <p8>
//       ${song.singer}
//         {/* ${song.singer} */}
//       </p8>
//       <p9>
//       ${ song.song }
//         {/* ${song.song} */}
//       </p9>
//       ${end} 
//     </div>
    
      
//     return html;
//   }
//   $('#new_registe').on('submit', function(e){
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(data){
//       var html = buildHTML(data);
//       $('.index__center__index__contents__inner').append(html)
//       $('#eee').val('')
//     })
//     .fail(function(){
//       alert('error');
//     })
//   })
// });


$(function(){

  // $('.slide-modal').click(function(){
  //   $('.active').removeClass('active');

  //   if ($(this).hasClass('next-btn')) {
  //     $('.active').next().addClass('active');
  //   } else {
  //     $('.active').prev().addClass('active');
  //   }

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
});

$(function () {
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

