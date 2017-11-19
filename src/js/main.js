$(document).ready(function () {
   // hamburger menu
  $("#menu").click(function () {
    $(".header__nav").toggleClass("header__nav--open");
    $(".header__button").toggleClass("header__button--animate");
  });

  
 
  // slick-slider main
  $('#main-screen').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2800,
    speed: 600,
    infinite: true,
    fade: true,
    cssEase: 'linear'
  });

    // slick-sliders
      $('.services__list').slick({
        dots: false,
        prevArrow: '<button type="button" class="services__slider-btn services__slider-btn--prev"><span class="fa fa-angle-left"></span></button>',
        nextArrow: '<button type="button" class="services__slider-btn services__slider-btn--next"><span class="fa fa-angle-right"></span></button>',
        speed: 300,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 680,
            settings: 'unslick'
          }
        ]
      });

      $('.dishes__wrapper').slick({
        dots: false,
        prevArrow: '<button type="button" class="dishes__slider-btn dishes__slider-btn--prev"><span class="fa fa-angle-left"></span></button>',
        nextArrow: '<button type="button" class="dishes__slider-btn dishes__slider-btn--next"><span class="fa fa-angle-right"></span></button>',
        speed: 300,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 680,
            settings: 'unslick'
          }
        ]
      });

      $('.testimonials__wrapper').slick({
        dots: false,
        prevArrow: '<button type="button" class="testimonials__slider-btn testimonials__slider-btn--prev"><span class="fa fa-angle-left"></span></button>',
        nextArrow: '<button type="button" class="testimonials__slider-btn testimonials__slider-btn--next"><span class="fa fa-angle-right"></span></button>',
        autoplaySpeed: 2500,
        speed: 300,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 680,
            settings: 'unslick'
          }
        ]
      });

				
  // slow scroll nav
  $(".header__nav-item").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 600);
  });

  



  $(document).ready(function() {
    $(document).on('scroll', onScroll);
  });
  
  function onScroll(event) {
    let scrollPos = $(document).scrollTop();
    let header = $(".header");
    let headerHeight = header.outerHeight();
    $('.header__nav-item').each(function() {
      let currLink = $(this);
      let refElement = $(currLink.attr('href'));
      if (refElement.position().top - headerHeight <= scrollPos && refElement.position().top - headerHeight + refElement.height() > scrollPos) {
        $('.header__nav-item').removeClass('header__nav-item--active');
        currLink.addClass('header__nav-item--active');
      } else {
        currLink.removeClass('header__nav-item--active');
      }
    });


  }

  // active menu items
  $('.header__nav-item').click(function(e) {
    e.preventDefault();
    $('.header__nav a').removeClass('header__nav-item--active');
    $(this).addClass('header__nav-item--active');
  });
  
   //Fixed sticky aside menu
  let menu = $(".header");
  fixed_menu = "header--fixed";
  menuPos = menu.offset().top;
 
  $(window).scroll(function () {
    if ($(this).scrollTop() > menuPos) {
      menu.addClass(fixed_menu);
    } else {
      menu.removeClass(fixed_menu);
    }
  });

  // fancybox
  $(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
  });
  
  // parallax main
  $('.parallax-window').parallax({imageSrc: '../img/dishes-bg.png'});

  // parallax main
  $('.parallax-talk').parallax({imageSrc: '../img/talk-bg.png'});

  // validate
  $("#commentForm").validate({
    rules: {
      name: {
          required: true
      },
      email: {
          required: true,
          email: true
      },
    },
    messages: {
      name: {
          required: "Please enter your name",
          name: "Please enter your name"
      },
      email: {
          required: "Please enter a valid email",
          email: "Please enter a valid email"
      },
      comment: {
        required: "Write some words",
        comment: "Write some words"
      }
    },
  });

    //back to top
  if ($('#button-up').length) {
    let scrollTrigger = 300, // px
      backToTop = function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#button-up').addClass('is-visible');
        } else {
          $('#button-up').removeClass('is-visible');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#button-up').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
    });
  }

}); 