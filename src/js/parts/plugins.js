import "slick-carousel";

export class Plugins {
  init() {
    this.TestimonialSlider();
    this.ServiceSlider();
    this.ClienReviewSlider();
  }

  TestimonialSlider() {
    $(".testimonial-slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: ".testimonial-slider-section .prev-arrow",
      nextArrow: ".textimonial-slider-section .next-arrow",
    });
  }
  ServiceSlider() {
    $(".service-slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: ".service-section .prev-arrow",
      nextArrow: ".service-section .next-arrow",
    });
  }
  ClienReviewSlider() {
    $(".client-review-slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
                {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
}
