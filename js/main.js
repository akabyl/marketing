$(function () {
  var mixer = mixitup('.portfolio__content');
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./image/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./image/arrow-right.svg" alt="arrow-right"></button>',
  })
});