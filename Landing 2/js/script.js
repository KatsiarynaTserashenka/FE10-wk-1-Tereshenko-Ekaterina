$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  });
});
$(window).on('scroll', function () {
  var scrollPos = $(window).scrollTop();
  if (scrollPos >= 30) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
