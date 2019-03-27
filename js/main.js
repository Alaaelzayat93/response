/*global $,alert,console*/
$(function(){
  'use strict'
  //adjust header height
  $('.header').height($(window).height());
  $(window).resize(function(){
    $('.header').height($(window).height());
    $('.slider').each(function(){
 $(this).css('paddingTop',($(window).height()-$('.slider li').height())/2);
});
  });

//links active
$('.nav-link').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});
//adjust bx slider
$('.slider').each(function(){
 $(this).css('paddingTop',($(window).height()-$('.slider li').height())/2);
});



/*owl*/
$('.slider').bxSlider({
  pager:false
});

/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementByclass("navbar").style.top = "0";
  } else {
    document.getElementByclass("navbar").style.top = "-50px";
  }
}*/
/*slider*/
 $(window).scroll(function(){
var navbar = $('.navbar');
if($(window).scrollTop() >= navbar.height()){
if(!navbar.hasClass('scrolled')){
navbar.removeClass('navbar-absolute').addClass('scrolled fixed-top');
} 
}else{
navbar.removeClass('scrolled navbar-fixed-top');
}
});
});
/*carousel*/
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  nav:true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 5,
      nav: true,
      loop: false
    }
  }
})





