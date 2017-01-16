
var main=function(){



   $('.DSS').hide();
   $('.AME').hide();
   $('.HFK').hide();
   $('.AboutMeTwo').hide();
   $('.projecting').hide();

/*$(window).scroll(function(){
var windowScrollPosTop=  $(window).scrollTop();
alert (windowScrollPosTop);

});
*/




  $('.image').on('click',
  function() {
  $(this).next().slideToggle(1000);

$(this).toggleClass('activeOne');




  });



  $('.assessmentManager').on('click', function(){
    $(this).next().slideToggle(1000);
    $(this).toggleClass('Amedit');

  });

  $('.hackference').on('click', function(){
    $(this).next().slideToggle(1000);
      $(this).toggleClass('hackferenceEdit');
  })


   $(window).scroll(function(){

  $('.projecting').fadeIn(1100);
  $('.AboutMeTwo').fadeIn(1100);
      var aTop = $('.links').height();
       if($(this).scrollTop()>=aTop){
          $('.links').toggle();

        }

    });


 /*$('#nav').localScroll({duration:800});*/


}
$(document).ready(main);
