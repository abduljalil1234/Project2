// preloder
$(window).on('load',function() {
  $("#loading").delay(800).fadeOut(1000);
  
})
// owlCarousel
$(document).ready(function(){
  $(".special_bottom_area").owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    smartSpeed:1500,
     responsive:{
       0:{
         items:1
       },
       576:{
        items:2
       },
       767:{
         items:2
       },
       992:{
         items:2
       },
       993:{
        items:4
       },
     }
    
  });
});
// mobile_menu
$('.res_icon').click(function(){
  $('.header_top_middle_area_right ul').slideToggle(1000);
});
// owlCarousel
$(document).ready(function(){
  $(".borderb").owlCarousel({
    items:3,
    loop:true,
    nav:true,
    navText:['<i class="fas fa-arrow-alt-circle-left"></i>','<i class="fas fa-arrow-alt-circle-right"></i>'],
    responsive:{
       0:{
         items:1
       },
       992:{
         items:1
       },
       993:{
        items:3
       },
     }
  });
});
// wow
new WOW().init();
// scrollbar
$('.scroll_btn').click(function(){
  $('html').animate({
    "scrollTop":"0",
  },2000);
});
  $(window).scroll(function(){
    var a=$(window).scrollTop();
    if(a>500){
      $(".scroll_btn").show();
    }
    else{
      $(".scroll_btn").hide();
    }
  });