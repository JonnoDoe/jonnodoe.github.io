'use strict';

//Плавная прокрутка
$('a[href^="#"]').bind('click.smoothscroll',function (event) {
  event.preventDefault();
  
  let target = this.hash;
  let $target = $(target);
  
  $('.html, .body').stop().animate({
    'scrollTop': $target.offset().top
  }, 500, 'swing', function () {
    window.location.hash = target;
  });
});