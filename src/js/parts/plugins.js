import "slick-carousel";

export class Plugins {
  init() {
    this.TestimonialSlider();
    this.ServiceSlider();
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
      slidesToShow:3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: ".service-section .prev-arrow",
      nextArrow: ".service-section .next-arrow",
    });
  }
}
