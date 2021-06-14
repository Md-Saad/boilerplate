$(document).ready(function () {
  "use strict";
  // Navbar Dropdown on hover
  // $('ul.navbar-nav li.dropdown').hover(function() {
  //   $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  //   }, function() {
  //     $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  // });

  // Video Replace from data attribute
  $(".video-button").on("click", function () {
    var video =
      '<iframe allowfullscreen src="' +
      $(this).attr("data-video") +
      '"></iframe>';
    $(this).replaceWith(video);
  });

  //  AOS Initialize
  AOS.init();

  $(window).on("scroll", function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $("#navigationBar").addClass("sticky-nav");
    } else {
      $("#navigationBar").removeClass("sticky-nav");
    }
  });

  // Background Shape Switches
  TweenMax.fromTo(
    ".switch",
    2,
    { opacity: 1 },
    { opacity: 0.3, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
  TweenMax.fromTo(
    ".switch-two",
    2,
    { y: 0 },
    { y: 10, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
  TweenMax.fromTo(
    ".switch-three",
    2,
    { x: 0 },
    { x: 10, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );

  // Review Slider
  $(".testimonials-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          centerMode: false,
          autoplay: false,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          infinite: false,
        },
      },
    ],
  });

  //Testimonial slider 2
  $(".testimonials-sliderTwo").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          centerMode: false,
          autoplay: false,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          infinite: false,
        },
      },
    ],
  });

  // counter-up
  $(".counter").countUp();

  // isotop
  ("use strict");
  var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1,
    },
  });
  // filter items on button click
  $(".isotop-menu").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue,
    });
  });
  $(".isotop-menu button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });
});
