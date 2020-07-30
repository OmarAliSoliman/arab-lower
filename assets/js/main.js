$(document).ready(function () {

  if($('.header-slider').length){
    $('.header-slider').slick({
      dots: true,
      arrows: false
    })
  }

  if($('.consult-slider').length){
    $('.consult-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  if($('.books-slider').length){
    $('.books-slider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  if($('.legal-post-slider').length){
    $('.legal-post-slider-content').slick({
      vertical:true,
      verticalSwiping: true,
      arrows: true,
      slidesToShow: 3,
      loop: false, 
      autoplay: false,
      infinite: false
    })
  }

  if($('.free-post-slider').length){
    $('.free-post-slider-content').slick({
      vertical:true,
      verticalSwiping: true,
      arrows: true,
      slidesToShow: 2,
      loop: false, 
      autoplay: false,
      infinite: false
    })
  }

  if($('.book-slider').length){
    $('.book-slider-content').slick({
      vertical:true,
      verticalSwiping: true,
      arrows: true,
      slidesToShow: 2,
      loop: false, 
      autoplay: false,
      infinite: false
    })
  }

});
